import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import Torneo from '../../../model/torneo';
import { TorneoService } from '../../../service/torneo-service/torneo-service';

@Component({
  selector: 'app-torneo-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './torneo-details.html',
  styleUrl: './torneo-details.css'
})
export class TorneoDetails implements OnInit{

    torneo?: Torneo;

  constructor(
    private torneoService: TorneoService,
    private route: ActivatedRoute
  ) {}

  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.torneoService.getTorneoById(id).subscribe(data => this.torneo = data);

}

}