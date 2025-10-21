import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EquipoService } from '../../../service/equipo-service/equipo-service';
import Equipo from '../../../model/equipo';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form implements OnInit{


  
  equipoForm!: FormGroup;
  equipoID?: number;

  constructor(
    private fb: FormBuilder,
    private equipoService: EquipoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.equipoForm = this.fb.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      nombreTorneo: ['', [Validators.required]],
      DT: ['', [Validators.required]]
    });

    this.equipoID = this.route.snapshot.params['id'];
    if (this.equipoID) {
      this.equipoService.getEquipoById(this.equipoID)
        .subscribe(equipo => this.equipoForm.patchValue(equipo));
    }
  }

  onSubmit(): void {
  
    if (this.equipoForm.invalid) return;

    if (this.equipoForm) {

      const equipoData: Equipo = { id: this.equipoID, ...this.equipoForm.value }; 

      this.equipoService.updateEquipo(equipoData).subscribe({
        next: () => this.router.navigate(['/equipos']),
        error: (e) => {console.log(e)} });

    } else {

      const equipoData = this.equipoForm;
      
      this.equipoService.postEquipo(equipoData).subscribe({
        next: () => this.router.navigate(['/equipos']),
        error: (e) => {console.log(e)} });
    }
  }

}
