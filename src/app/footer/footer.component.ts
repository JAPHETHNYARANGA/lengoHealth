import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private router: Router){}

  navigateToHome(){
    this.router.navigate([''])
  }

  navigateToAbout(){
    this.router.navigate(['about']);
  }
  navigateToProjects(){
    this.router.navigate(['projects']);
  }

  navigateToInvolved(){
    this.router.navigate(['involved']);
  }

  navigateToContact(){
    this.router.navigate(['contact']);
  }
}
