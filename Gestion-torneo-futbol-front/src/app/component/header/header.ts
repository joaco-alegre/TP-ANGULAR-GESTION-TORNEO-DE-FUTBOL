import { CommonModule, NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule, NgbCollapseModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  isScrolled = false;

  
  public isMenuCollapsed = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (window.scrollY > 10) {
      this.isScrolled = true;
    } else {

      this.isScrolled = false;
    }
  }
// 1. Crea una propiedad para guardar el estado
  menuVisible = false;

  // 2. Crea una función para alternar (toggle) ese estado
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

}
