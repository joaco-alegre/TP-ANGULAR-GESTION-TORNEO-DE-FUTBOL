import { Component, OnInit } from '@angular/core';
import Equipo from '../../../model/equipo';
import { EquipoService } from '../../../service/equipo-service/equipo-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './equipo-details.html',
  styleUrl: './equipo-details.css'
})
export class EquipoDetails{

  equipo?: Equipo;

  constructor(
    private equipoService: EquipoService,
    private route: ActivatedRoute
  ) {}

  /*
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.equipoService.getEquipoById(+id).subscribe(data => this.equipo = data);*/
  }




