import { Component, Input, OnInit } from '@angular/core';
import Equipo from '../../../model/equipo';
import { EquipoService } from '../../../service/equipo-service/equipo-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './equipo-List.html',
  styleUrl: './equipo-List.css'
})
export class EquipoList implements OnInit{

  @Input() id!: string;

  todosEquipos: Equipo[] = [];
  filtrarEquipos: Equipo[] = [];

  constructor(private equipoService: EquipoService) {}

  ngOnInit(): void {
    this.filtrarEquiposPorTorneo();
  }

  filtrarEquiposPorTorneo(): void {
    if (this.id) {
      this.filtrarEquipos = this.todosEquipos.filter(
        (equipo) => equipo.idTorneo === this.id
      );
    }
  }

/*
  getEquipos(): void {
    this.equipoService.getEquipos().subscribe(data => {
      console.log(data)
      this.equipos = data});
  }

  deleteEquipo(id: number): void {
  
      this.equipoService.deleteEquipo(id).subscribe(() => this.getEquipos());
    
  }*/
  
}


