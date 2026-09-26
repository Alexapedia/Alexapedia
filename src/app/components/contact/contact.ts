import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CONTACT } from '../../data/company.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly info = CONTACT;
  readonly submitted = signal(false);

  form = {
    name: '',
    email: '',
    company: '',
    service: 'Web / Mobile App',
    message: '',
  };

  onSubmit(event: Event): void {
    event.preventDefault();
    // Frontend-only: show success. Swap this for an API / Formspree / mailto later.
    this.submitted.set(true);
    console.info('[Alexapedia] Contact form mock submit:', { ...this.form });
  }

  whatsappLink(): string {
    const phone = this.info.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${phone}`;
  }
}
