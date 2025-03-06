import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  // Handling form submission
  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      // Logic to handle the submission (e.g., send the form data to the backend or email)
      console.log('Form submitted:', this.contact);

      // Reset the form after submission
      this.contact = {
        name: '',
        email: '',
        message: ''
      };
    } else {
      // Handle form validation
      console.log('Please fill out all fields');
    }
  }
}
