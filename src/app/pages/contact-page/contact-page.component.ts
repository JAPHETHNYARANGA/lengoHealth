import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { MailerServiceService } from 'src/app/httpSevices/mailer-service.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  isLoading = false;
  isSuccess = false;
  errorMessage = '';

  constructor(private mailerService: MailerServiceService) {}

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      this.isLoading = true;
      this.isSuccess = false;
      this.errorMessage = '';

      this.mailerService.submitContactForm(this.contact).subscribe({
        next: (response: any) => {
          this.isSuccess = true;
          this.isLoading = false;
          
          // Reset the form after successful submission
          this.contact = {
            name: '',
            email: '',
            message: ''
          };
          
          // Auto-hide success message after 5 seconds
          setTimeout(() => {
            this.isSuccess = false;
          }, 5000);
        },
        error: (error: any) => {
          console.error('Error submitting form:', error);
          this.errorMessage = error.error?.message || 
                            'There was an error submitting your message. Please try again later.';
          this.isLoading = false;
        }
      });
    } else {
      this.errorMessage = 'Please fill out all required fields.';
    }
  }

  ngOnInit() {
    AOS.init();
  }
}