// navbar.component.ts — The navigation bar shown on every page.
// It also handles the mobile "hamburger" menu toggle.

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Controls whether the mobile menu is open or closed
  menuOpen = false;

  // Flips menuOpen between true and false
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  // Called when a nav link is clicked — closes mobile menu
  closeMenu(): void {
    this.menuOpen = false;
  }
}
