import { Component, OnInit } from '@angular/core';
import Jugador from '../../../model/jugador';
import { JugadorService } from '../../../service/jugador-service/jugador-service';
import { ActivatedRoute } from '@angular/router';
import EstadisticaGoleador from '../../../model/estadistica-goleador';

@Component({
  selector: 'app-jugador-details',
  imports: [],
  templateUrl: './jugador-details.html',
  styleUrl: './jugador-details.css'
})
export class JugadorDetails implements OnInit{

    jugador?: Jugador;
    estadisticaGoleador?: EstadisticaGoleador;

  constructor(
    private JugaodrService: JugadorService,
    private route: ActivatedRoute
  ) {}

  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.JugaodrService.getJugadorById(id).subscribe(data => this.jugador = data);

  }
}