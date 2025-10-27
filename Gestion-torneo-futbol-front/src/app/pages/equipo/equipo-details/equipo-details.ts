import { Component, OnInit } from '@angular/core';
import Equipo from '../../../model/equipo';
import { EquipoService } from '../../../service/equipo-service/equipo-service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './equipo-details.html',
  styleUrl: './equipo-details.css'
})
export class EquipoDetails implements OnInit{

  equipo?: Equipo;

  constructor(
    private equipoService: EquipoService,
    private route: ActivatedRoute
  ) {}

  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.equipoService.getEquipoById(id).subscribe(data => this.equipo = data);
  }

}




