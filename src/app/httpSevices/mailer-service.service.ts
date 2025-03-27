import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../shared/utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailerServiceService {
  private contactUrl = `${BASE_URL}/contact`;
  private involvedUrl = `${BASE_URL}/involved`;

  constructor(private http: HttpClient) {}

  submitContactForm(contact: { name: string; email: string; message: string }): Observable<any> {
    return this.http.post(this.contactUrl, contact);
  }

  submitInvolvedForm(data: {
    form_type: 'volunteer' | 'donate' | 'partner';
    name: string;
    email: string;
    phone: string;
    organization?: string;
    interests?: string[];
    message?: string;
    amount?: number;
    recurring?: boolean;
  }): Observable<any> {
    return this.http.post(this.involvedUrl, data);
  }
}