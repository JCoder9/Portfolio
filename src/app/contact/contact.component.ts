import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

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
        await this.simulateEmailSend(formData);
        
        // Reset form and show success message
        this.contactForm.reset();
        this.submitMessage = 'Message received! Thank you for contacting me. I will get back to you soon at ' + formData.email;
        
      } catch (error) {
        console.error('Email sending failed:', error);
        this.submitMessage = `Thank you for your message! Please feel free to contact me directly at ${environment.contactEmail}`;
      } finally {
        this.isSubmitting = false;
        
        // Clear message after 7 seconds
        setTimeout(() => {
          this.submitMessage = '';
        }, 7000);
      }
    }
  }

  private async simulateEmailSend(formData: any): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form data to be sent:', formData);
        console.log('Email would be sent to: jordanhiggins06@gmail.com');
        resolve();
      }, 2000);
    });
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
}
