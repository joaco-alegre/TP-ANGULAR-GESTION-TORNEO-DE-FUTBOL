import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import Equipo from '../../../model/equipo';
import DT from '../../../model/dt';
import { DtService } from '../../../service/dt-service/dt-service';

@Component({
  selector: 'app-dt-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './dt-details.html',
  styleUrl: './dt-details.css'
})
export class DtDetails implements OnInit{

    dt?: DT;

  constructor(
    private dtService: DtService,
    private route: ActivatedRoute
  ) {}

  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.dtService.geDtById(id).subscribe(data => this.dt = data);
  }

}


