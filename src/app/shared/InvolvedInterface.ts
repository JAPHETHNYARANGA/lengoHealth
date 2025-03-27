export interface InvolvedFormData {
    form_type: 'volunteer' | 'donate' | 'partner';
    name: string;
    email: string;
    phone: string;
    organization?: string;
    interests?: string[];
    message?: string;
    amount?: number;
    recurring?: boolean;
  }