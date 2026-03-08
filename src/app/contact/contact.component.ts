import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      const formData = this.contactForm.value;
      
      try {
        // Send email via EmailJS
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: environment.contactEmail
          },
          EMAILJS_CONFIG.PUBLIC_KEY
        );
        
        // Reset form and show success message
        this.contactForm.reset();
        this.submitMessage = 'Message sent successfully! Thank you for contacting me. I will get back to you soon.';
        
      } catch (error) {
        console.error('Email sending failed:', error);
        this.submitMessage = `Sorry, there was an error sending your message. Please contact me directly at ${environment.contactEmail}`;
      } finally {
        this.isSubmitting = false;
        
        // Clear message after 7 seconds
        setTimeout(() => {
          this.submitMessage = '';
        }, 7000);
      }
    }
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
}
