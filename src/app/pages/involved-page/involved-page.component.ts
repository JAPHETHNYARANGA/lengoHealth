import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { MailerServiceService } from 'src/app/httpSevices/mailer-service.service';
import { InvolvedFormData } from 'src/app/shared/InvolvedInterface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-involved-page',
  templateUrl: './involved-page.component.html',
  styleUrls: ['./involved-page.component.scss']
})
export class InvolvedPageComponent implements OnInit {
  volunteerInterests = {
    healthEducation: false,
    communityOutreach: false,
    eventCoordination: false,
    medicalSupport: false,
    administration: false,
    other: false
  };

  partnershipInterests = {
    programSponsorship: false,
    employeeVolunteering: false,
    inKindDonations: false,
    capacityBuilding: false,
    advocacy: false,
    other: false
  };

  constructor(private mailerService: MailerServiceService) {}

  ngOnInit() {
    AOS.init();
  }

  submitVolunteerForm(form: NgForm) {
    if (form.invalid) return;

    const formData = form.value;
    const data: InvolvedFormData = {
      form_type: 'volunteer',
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      interests: this.getSelectedInterests(),
      message: formData.experience
    };
    
    this.mailerService.submitInvolvedForm(data).subscribe({
      next: () => {
        alert('Volunteer application submitted successfully!');
        form.resetForm();
        this.resetInterests();
      },
      error: () => alert('Error submitting form. Please try again.')
    });
  }

  submitDonationForm(form: NgForm) {
    if (form.invalid) return;

    const formData = form.value;
    const data: InvolvedFormData = {
      form_type: 'donate',
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      amount: formData.amount,
      recurring: formData.recurring || false,
      message: formData.message
    };
    
    this.mailerService.submitInvolvedForm(data).subscribe({
      next: () => {
        alert('Donation form submitted successfully!');
        form.resetForm();
      },
      error: () => alert('Error submitting form. Please try again.')
    });
  }

  submitPartnershipForm(form: NgForm) {
    if (form.invalid) return;

    const formData = form.value;
    const data: InvolvedFormData = {
      form_type: 'partner',
      name: formData.contactName,
      email: formData.email,
      phone: formData.phone,
      organization: formData.orgName,
      interests: this.getSelectedPartnershipInterests(),
      message: formData.partnershipDetails
    };
    
    this.mailerService.submitInvolvedForm(data).subscribe({
      next: () => {
        alert('Partnership request submitted successfully!');
        form.resetForm();
        this.resetPartnershipInterests();
      },
      error: () => alert('Error submitting form. Please try again.')
    });
  }

  private getSelectedInterests(): string[] {
    return Object.entries(this.volunteerInterests)
      .filter(([_, value]) => value)
      .map(([key, _]) => this.formatInterestKey(key));
  }

  private getSelectedPartnershipInterests(): string[] {
    return Object.entries(this.partnershipInterests)
      .filter(([_, value]) => value)
      .map(([key, _]) => this.formatInterestKey(key));
  }

  private formatInterestKey(key: string): string {
    return key.replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  }

  private resetInterests() {
    this.volunteerInterests = {
      healthEducation: false,
      communityOutreach: false,
      eventCoordination: false,
      medicalSupport: false,
      administration: false,
      other: false
    };
  }

  private resetPartnershipInterests() {
    this.partnershipInterests = {
      programSponsorship: false,
      employeeVolunteering: false,
      inKindDonations: false,
      capacityBuilding: false,
      advocacy: false,
      other: false
    };
  }
}