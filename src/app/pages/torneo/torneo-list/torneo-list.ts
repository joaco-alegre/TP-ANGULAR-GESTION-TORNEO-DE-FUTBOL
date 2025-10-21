import { Component, OnInit } from '@angular/core';
import Torneo from '../../../model/torneo';
import { torneoService } from '../../../service/torneo-service/torneo-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-torneo-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './torneo-list.html',
  styleUrl: './torneo-list.css'
})
export class TorneoList implements OnInit{

  
    torneos: Torneo[] = [];
  
    constructor(private torneoService: torneoService) {}
  
    ngOnInit(): void {
      this.getTorneos();
    }
  
    getTorneos(): void {
      this.torneoService.getTorneo().subscribe(data => {
        console.log(data)
        this.torneos = data});
    }
  
    deletTorneos(id: number): void {
    
        this.torneoService.deleteTorneo(id).subscribe(() => this.getTorneos());
      
    }
    

}
