import { Component } from '@angular/core';
import { TECH_STACK, WHY_US } from '../../data/company.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-why-us',
  imports: [RevealDirective],
  templateUrl: './why-us.html',
  styleUrl: './why-us.scss',
})
export class WhyUs {
  readonly items = WHY_US;
  readonly stack = TECH_STACK;
}
