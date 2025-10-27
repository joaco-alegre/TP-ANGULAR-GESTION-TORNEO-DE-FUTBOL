import { CommonModule, NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (window.scrollY > 10) {
      this.isScrolled = true;
    } else {

      this.isScrolled = false;
    }
  }

}
