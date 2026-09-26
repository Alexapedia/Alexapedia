import { Component, computed, signal } from '@angular/core';
import {
  PROJECTS,
  PROJECT_FILTERS,
  ProjectItem,
  ProjectType,
} from '../../data/company.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-portfolio',
  imports: [RevealDirective],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  readonly filters = PROJECT_FILTERS;
  readonly activeFilter = signal<'all' | ProjectType>('all');
  readonly selectedId = signal<string | null>(null);

  readonly filtered = computed(() => {
    const f = this.activeFilter();
    if (f === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.type === f);
  });

  readonly selected = computed(() => {
    const id = this.selectedId();
    const list = this.filtered();
    if (id) {
      return list.find((p) => p.id === id) ?? list[0] ?? null;
    }
    return list[0] ?? null;
  });

  setFilter(id: 'all' | ProjectType): void {
    this.activeFilter.set(id);
    this.selectedId.set(null);
  }

  select(project: ProjectItem): void {
    this.selectedId.set(project.id);
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  isActive(id: 'all' | ProjectType): boolean {
    return this.activeFilter() === id;
  }

  isSelected(id: string): boolean {
    return this.selected()?.id === id;
  }
}
