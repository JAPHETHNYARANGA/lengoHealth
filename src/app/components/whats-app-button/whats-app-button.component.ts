import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whats-app-button',
  templateUrl: './whats-app-button.component.html',
  styleUrls: ['./whats-app-button.component.scss']
})
export class WhatsAppButtonComponent {
  @Input() phoneNumber: string = '254791835665';

}
