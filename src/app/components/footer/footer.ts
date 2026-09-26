import { Component } from '@angular/core';
import { COMPANY, FOOTER, NAV_LINKS } from '../../data/company.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly company = COMPANY;
  readonly footer = FOOTER;
  readonly links = NAV_LINKS;
}
