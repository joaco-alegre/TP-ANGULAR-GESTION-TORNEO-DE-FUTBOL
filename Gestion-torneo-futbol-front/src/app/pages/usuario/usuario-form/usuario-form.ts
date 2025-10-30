import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EquipoService } from '../../../service/equipo-service/equipo-service';
import Equipo from '../../../model/equipo';
import Usuario from '../../../model/usuario';

@Component({
  selector: 'app-usuario-form',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './usuario-form.html',
  styleUrl: './usuario-form.css'
})
export class UsuarioForm implements OnInit{

  
  
  usuarioForm!: FormGroup;
  //usuarioID?: number;

  constructor(
    private fb: FormBuilder,
    private equipoService: EquipoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
/*
    this.equipoID = this.route.snapshot.params['id'];
    if (this.equipoID) {
      this.equipoService.getEquipoById(this.equipoID)
        .subscribe(equipo => this.equipoForm.patchValue(equipo));
    }*/
  }

  onSubmit(): void {

  /*
    if (this.usuarioForm.invalid) return;

    if (this.usuarioForm) {

      const usuarioData: Usuario = { id: this.equipoID, ...this.equipoForm.value }; 

      this.equipoService.updateEquipo(equipoData).subscribe({
        next: () => this.router.navigate(['/equipos']),
        error: (e) => {console.log(e)} });

    } else {

      const equipoData = this.equipoForm;
      
      this.equipoService.postEquipo(equipoData).subscribe({
        next: () => this.router.navigate(['/equipos']),
        error: (e) => {console.log(e)} });
    }
  }*/

}

}