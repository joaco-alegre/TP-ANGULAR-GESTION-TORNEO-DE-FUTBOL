import { Component, Input, OnInit } from '@angular/core';
import Equipo from '../../../model/equipo';
import { EquipoService } from '../../../service/equipo-service/equipo-service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import Torneo from '../../../model/torneo';
import dt from '../../../model/dt';
import DT from '../../../model/dt';
import Fixture from '../../../model/fixture';

@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './equipo-list.html',
  styleUrl: './equipo-list.css'
})
export class EquipoList implements OnInit{

  @Input() id!: string;

  torneo?: Torneo;
  equipo?: Equipo;
  directorT:? DT;

  todosEquipos: Equipo[] = [];
  filtrarEquipos: Equipo[] = [];


  constructor(private equipoService: EquipoService,
              private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('ID del torneo recibido:', this.id); 

    this.equipoService.getEquipos().subscribe(data => {
      
      console.log('Datos recibidos del servicio:', data); 
      this.todosEquipos = data;
      this.filtrarEquiposPorTorneo();
    });
  }

  filtrarEquiposPorTorneo(): void {
    if (this.id) {
      this.filtrarEquipos = this.todosEquipos.filter(
        (equipo) => equipo.idTorneo === this.id
      );
      console.log('Equipos filtrados:', this.filtrarEquipos);
    }
  }


/*
  getEquipos(): void {
    this.equipoService.getEquipos().subscribe(data => {
      console.log(data)
      this.equipos = data});
  }

  deleteEquipo(id: string): void {
  
      this.equipoService.deleteEquipo(id).subscribe(() => this.getEquipos());
    
  }*/
  
}


