

import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'LengoHealth';

  @ViewChild('mainContent') mainContent: any;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  ngAfterViewInit() {
    // Scroll to the top of the page on initial load
    this.viewportScroller.scrollToPosition([0, 0]);

    // Subscribe to Router events to scroll to top on navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Scroll to the top of the page
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}


