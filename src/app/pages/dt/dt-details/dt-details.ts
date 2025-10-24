import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dt-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './dt-details.html',
  styleUrl: './dt-details.css'
})
export class DtDetails implements  OnInit{

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

}
