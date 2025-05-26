import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

import { Activity } from '../../interfaces/activity';
import { ActivitiesService } from 'src/app/httpSevices/activities/activities.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  currentSlideIndex: number = 0;
  slideInterval: any;
  slides: Activity[] = [];
  isLoading: boolean = true;
  error: string | null = null;

  constructor(
    private router: Router,
    private activitiesService: ActivitiesService
  ) {}

  ngOnInit() {
    AOS.init();
    this.loadActivities();
  }

  loadActivities() {
    this.activitiesService.getActivities().subscribe({
      next: (response: any) => {
        if (response.success && response.data) {
          this.slides = response.data.map((activity: Activity) => ({
            ...activity,
            // Use image_url from API if available, otherwise fallback to image_src
            imageSrc: activity.image_url || activity.image_src
          }));
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading activities:', err);
        this.error = 'Failed to load activities. Please try again later.';
        this.isLoading = false;
      
      },
      complete: () => {
        // Start slideshow after data is loaded
        this.startSlideshow();
      }
    });
  }

 

  startSlideshow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    this.slideInterval = setInterval(() => {
      this.moveSlide(1);
    }, 4000);
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  navigateToInvolved() {
    this.router.navigate(['involved']);
  }

  moveSlide(direction: number): void {
    this.currentSlideIndex += direction;

    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.slides.length - 1;
    } else if (this.currentSlideIndex >= this.slides.length) {
      this.currentSlideIndex = 0;
    }

    this.updateSliderPosition();
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    this.updateSliderPosition();
    // Reset the auto-slide timer when user manually changes slide
    clearInterval(this.slideInterval);
    this.slideInterval = setInterval(() => {
      this.moveSlide(1);
    }, 4000);
  }

  private updateSliderPosition(): void {
    const slider = document.querySelector('.slider') as HTMLElement;
    if (slider) {
      slider.style.transform = `translateX(-${this.currentSlideIndex * 100}%)`;
    }
  }
}