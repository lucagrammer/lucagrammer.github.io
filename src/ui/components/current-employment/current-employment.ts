import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {Job} from '../../../models/job.model';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {TECHNOLOGY_ICONS} from '../../../constants/icons';
import {PortfolioStore} from '../../../stores/portfolio/portfolio.store';

@Component({
  selector: 'app-current-employment',
  templateUrl: './current-employment.html',
  styleUrls: ['./current-employment.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButton,
    MatIcon
  ]
})
export class CurrentEmployment {
  protected readonly TECHNOLOGY_ICONS = TECHNOLOGY_ICONS

  protected readonly portfolioStore = inject(PortfolioStore);

  protected readonly jobExperiences: Signal<Job[]> = this.portfolioStore.jobExperiences;

  openLink(link: string) {
    window.open(link, '_blank')?.focus();
  }
}

