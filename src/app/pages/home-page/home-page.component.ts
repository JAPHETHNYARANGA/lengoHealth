import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Use namespace import
import * as AOS from 'aos';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  constructor(private router: Router){}

  ngOnInit() {
    AOS.init();  // Initialize AOS
  }

  navigateToInvolved(){
    this.router.navigate(['involved']);
  }
}
