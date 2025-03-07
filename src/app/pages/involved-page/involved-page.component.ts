import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-involved-page',
  templateUrl: './involved-page.component.html',
  styleUrls: ['./involved-page.component.scss']
})
export class InvolvedPageComponent {
  ngOnInit() {
    AOS.init();  // Initialize AOS
  }
}
