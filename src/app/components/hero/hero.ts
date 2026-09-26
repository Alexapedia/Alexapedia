import { Component, OnInit, signal } from '@angular/core';
import { COMPANY, STATS, StatItem } from '../../data/company.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [RevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  readonly company = COMPANY;
  readonly stats = STATS;
  readonly animated = signal<Record<string, number>>({});

  ngOnInit(): void {
    // Start counters after a short delay for entrance feel
    setTimeout(() => this.animateStats(), 600);
  }

  private animateStats(): void {
    for (const stat of this.stats) {
      this.countUp(stat);
    }
  }

  private countUp(stat: StatItem): void {
    const duration = 1600;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      this.animated.update((m) => ({ ...m, [stat.label]: Math.round(stat.value * eased) }));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  valueOf(stat: StatItem): number {
    return this.animated()[stat.label] ?? 0;
  }
}
