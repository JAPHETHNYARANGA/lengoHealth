import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  // Toggle the mobile menu
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Navigate to the Home page and close the mobile menu
  navigateToHome() {
    this.router.navigate(['']);
    this.closeMobileMenu();
  }

  // Navigate to the About page and close the mobile menu
  navigateToAbout() {
    this.router.navigate(['/about']);
    this.closeMobileMenu();
  }

  // Navigate to Get Involved page and close the mobile menu
  navigateToInvolved() {
    this.router.navigate(['/involved']);
    this.closeMobileMenu();
  }

  // Navigate to Contact page and close the mobile menu
  navigateToContact() {
    this.router.navigate(['/contact']);
    this.closeMobileMenu();
  }

  // Close the mobile menu
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
