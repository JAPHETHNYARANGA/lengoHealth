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
  totalSlides: number = 5;  // Number of slides
  slideInterval: any; // To store the interval ID for auto-sliding


   // Slide data (image, title, description)
   slides = [
    {
      imageSrc: 'assets/image1.svg',
      title: 'The use of mobile colposcopes',
      description: 'using middle cadre staff who perform colposcopy using mobile colposcopes in the clinics and in the communities (health centers and Community-based Health Planning Services [CHPS] compounds). The mobile colposcope used at LeHP is the Enhanced Visual Assessment (EVA) system (MobileODT, Tel Aviv, Israel)'
    },
    {
      imageSrc: 'assets/image2.svg',
      title: 'Girls’ Health & Hygiene',
      description: 'Clinical mentorship on cervical cancer screening and treatment for Nurses and clinical officers in Siaya County'
    },
    {
      imageSrc: 'assets/image3.svg',
      title: 'Girls’ Health & Hygiene',
      description: 'Project Nurse offering health education to women on queue for screening'
    },
    {
      imageSrc: 'assets/image4.svg',
      title: 'Volunteership',
      description: 'Community Health Volunteers during an outreach'
    },
    {
      imageSrc: 'assets/image5.svg',
      title: 'Helping Communities',
      description: 'Community gatekeepers embrace health services to their communities. Area Chief supports LeHP activities and approach'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    AOS.init();  // Initialize AOS

    // Auto slide every 2 seconds
    this.slideInterval = setInterval(() => {
      this.moveSlide(1); // Move to the next slide automatically
    }, 4000);
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
