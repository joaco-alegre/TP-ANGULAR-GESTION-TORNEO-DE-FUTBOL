import { Component, OnInit } from '@angular/core';
import { FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-login',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './usuario-login.html',
  styleUrl: './usuario-login.css',
})
export class UsuarioLogin{

  
  usuarioForm!: FormGroup; 
  
  selectedRole: 'usuario' | 'dt' = 'usuario'; 


  constructor(private router: Router) {
  }

  setRole(role: 'usuario' | 'dt') {
    this.selectedRole = role;
  }

  onSubmit() {
    if (this.usuarioForm.valid) {
      
      const loginData = {
        ...this.usuarioForm.value,
        role: this.selectedRole 
      };

      console.log('Intentando iniciar sesión con:', loginData);
      
      // --- LÓGICA DE LOGIN AQUÍ ---
      // (Aquí iría tu lógica de autenticación)
      // ...
      
      // Si el login es exitoso, NAVEGA DESDE AQUÍ
      // (¡Mira la nota importante al final!)
      this.router.navigate(['/es/usuario-home']);
    }
  }
}

