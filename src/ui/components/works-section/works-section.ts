import {ChangeDetectionStrategy, Component, computed, inject, Signal} from '@angular/core';
import {Work} from '../../../models/work.model';
import {MatButton} from '@angular/material/button';
import {WorkDetails} from '../work-details/work-details';
import {MatDialog} from '@angular/material/dialog';
import {Tag} from '../tag/tag';
import {TAG_COLORS} from '../../../constants/colors';
import {PortfolioStore} from '../../../stores/portfolio/portfolio.store';

@Component({
  selector: 'app-works-section',
  templateUrl: './works-section.html',
  styleUrls: ['./works-section.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButton,
    Tag
  ]
})
export class WorksSection {
  protected readonly  TAG_COLORS= TAG_COLORS;

  protected readonly dialog = inject(MatDialog);
  protected readonly portfolioStore = inject(PortfolioStore);

  protected readonly works: Signal<Work[]> = this.portfolioStore.works;
  protected readonly worksToShow = computed(() => this.works().filter(w => !w.hidden));

  openWork(work: Work) {
    this.dialog.open(WorkDetails, {
      data: {
        workId: work.id,
      }
    });
  }
}

