import { Component } from '@angular/core';
import { SERVICES } from '../../data/company.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-services',
  imports: [RevealDirective],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  readonly services = SERVICES;
}
