import { Component, Input, OnInit } from '@angular/core';
import Jugador from '../../../model/jugador';
import { JugadorService } from '../../../service/jugador-service/jugador-service';
import { RouterLink } from "@angular/router";
import Equipo from '../../../model/equipo';
import DT from '../../../model/dt';
import Fixture from '../../../model/fixture';

@Component({
  selector: 'app-jugador-list',
  imports: [RouterLink],
  templateUrl: './jugador-list.html',
  styleUrl: './jugador-list.css'
})
export class JugadorList implements OnInit{

  equipo?: Equipo;


  @Input() id!: string;

  todosLosJugadores: Jugador[] = [];
  filtrarJugadores: Jugador[] = [];

  directorT?:DT;

  filtrarFixture: Fixture[] = [];
  fixtures: Fixture[] = [];

  constructor(private jugadorService: JugadorService) {}

  ngOnInit(): void {
    console.log('ID del equipo recibido:', this.id); 

    this.jugadorService.getJugadores().subscribe(data => {
      
      console.log('Datos recibidos del servicio:', data); 
      this.todosLosJugadores = data;
      this.filtrarJugadoresPorEquipo();
    });
  }

  filtrarJugadoresPorEquipo(): void {
    if (this.id) {
      this.filtrarJugadores = this.todosLosJugadores.filter(
        (jugador) => jugador.idEquipo === this.id
      );
      console.log('Jugador filtrados:', this.filtrarJugadores);
    }
  }

      filtrarFixturePorEquipo(): void {
    if (this.id) {
      this.filtrarFixture = this.fixtures.filter(
        (fixture) => fixture.id === this.id
      );
    }
  }


  getJugadores(): void {
    this.jugadorService.getJugadores().subscribe(data => {
      console.log(data)
      this.todosLosJugadores = data});
  }

  deleteJugador(id: string): void {
  
      this.jugadorService.deleteJugador(id).subscribe(() => this.getJugadores());
    
  }
  

}
