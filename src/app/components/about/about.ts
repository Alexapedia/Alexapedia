import { Component } from '@angular/core';
import { ABOUT } from '../../data/company.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly about = ABOUT;
}
