import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TorneoService } from '../../../service/torneo-service/torneo-service';
import Torneo from '../../../model/torneo';

@Component({
  selector: 'app-torneo-form',
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './torneo-form.html',
  styleUrl: './torneo-form.css'
})
export class TorneoForm implements OnInit{

  torneoForm!: FormGroup;
  torneoID?: number;

  constructor(
    private fb: FormBuilder,
    private torneoService: TorneoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.torneoForm = this.fb.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      nombreTorneo: ['', [Validators.required]],
      DT: ['', [Validators.required]]
    });
/*
    this.equipoID = this.route.snapshot.params['id'];
    if (this.equipoID) {
      this.equipoService.getEquipoById(this.equipoID)
        .subscribe(equipo => this.equipoForm.patchValue(equipo));
    }*/
  }

  onSubmit(): void {
  
    if (this.torneoForm.invalid) return;

    if (this.torneoForm) {

      const torneoData: Torneo = { id: this.torneoID, ...this.torneoForm.value }; 

      this.torneoService.updateTorneo(torneoData).subscribe({
        next: () => this.router.navigate(['/es/torneos']),
        error: (e) => {console.log(e)} });

    } else {

      const torneoData = this.torneoForm;
      
      this.torneoService.postTorneo(torneoData).subscribe({
        next: () => this.router.navigate(['/es/torneos']),
        error: (e) => {console.log(e)} });
    }
  }
}
