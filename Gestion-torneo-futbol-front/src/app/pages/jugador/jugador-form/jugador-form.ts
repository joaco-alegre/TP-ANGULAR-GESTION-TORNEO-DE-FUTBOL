import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { TorneoService } from '../../../service/torneo-service/torneo-service';
import { ActivatedRoute, Router } from '@angular/router';
import Jugador from '../../../model/jugador';
import { JugadorService } from '../../../service/jugador-service/jugador-service';

@Component({
  selector: 'app-jugador-form',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './jugador-form.html',
  styleUrl: './jugador-form.css'
})
export class JugadorForm implements OnInit{

  
  jugadorForm!: FormGroup;
  jugadorID?: number;

  constructor(
    private fb: FormBuilder,
    private jugadorService: JugadorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.jugadorForm = this.fb.group({
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
  
    if (this.jugadorForm.invalid) return;

    if (this.jugadorForm) {

      const jugadorData: Jugador = { id: this.jugadorID, ...this.jugadorForm.value }; 

      this.jugadorService.updateJugador(jugadorData).subscribe({
        next: () => this.router.navigate(['/es/jugadores']),
        error: () => {console.log()} });

    } else {

      const jugadorData = this.jugadorForm;
      
      this.jugadorService.postJugador(jugadorData).subscribe({
        next: () => this.router.navigate(['/es/jugador']),
        error: (e) => {console.log(e)} });
    }
  }

}
