import { Component } from '@angular/core';
import { PROCESS } from '../../data/company.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-process',
  imports: [RevealDirective],
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class Process {
  readonly steps = PROCESS;
}
