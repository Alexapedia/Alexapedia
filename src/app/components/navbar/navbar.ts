import { Component, HostListener, effect, signal } from '@angular/core';
import { COMPANY, NAV_LINKS } from '../../data/company.data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  readonly company = COMPANY;
  readonly links = NAV_LINKS;
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  constructor() {
    effect(() => {
      const open = this.menuOpen();
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 1024 && this.menuOpen()) {
      this.menuOpen.set(false);
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
