import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  currentSlideIndex: number = 0;
  totalSlides: number = 4;  // Number of slides
  slideInterval: any; // To store the interval ID for auto-sliding

  constructor(private router: Router) {}

  ngOnInit() {
    AOS.init();  // Initialize AOS

    // Auto slide every 2 seconds
    this.slideInterval = setInterval(() => {
      this.moveSlide(1); // Move to the next slide automatically
    }, 2000);
  }

  ngOnDestroy() {
    // Clear the interval when the component is destroyed to avoid memory leaks
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  navigateToInvolved() {
    this.router.navigate(['involved']);
  }

  // Method to move to the next/previous slide
  moveSlide(direction: number): void {
    this.currentSlideIndex += direction;

    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.totalSlides - 1; // Loop back to the last slide
    } else if (this.currentSlideIndex >= this.totalSlides) {
      this.currentSlideIndex = 0; // Loop back to the first slide
    }

    const slider = document.querySelector('.slider') as HTMLElement;
    slider.style.transform = `translateX(-${this.currentSlideIndex * 100}%)`;
  }
}
