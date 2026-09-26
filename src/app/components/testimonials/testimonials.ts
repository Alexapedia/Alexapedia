import { Component } from '@angular/core';
import { TESTIMONIALS } from '../../data/company.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-testimonials',
  imports: [RevealDirective],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  readonly items = TESTIMONIALS;

  stars(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
}
