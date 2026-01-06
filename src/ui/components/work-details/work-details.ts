import {ChangeDetectionStrategy, Component, computed, inject, signal} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MAT_DIALOG_DATA, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import {Tag} from '../tag/tag';
import {MatButton} from '@angular/material/button';
import {ImageGallery} from '../image-gallery/image-gallery';
import {PortfolioStore} from '../../../stores/portfolio/portfolio.store';
import {TAG_COLORS} from '../../../constants/colors';

@Component({
  selector: 'app-work-details',
  imports: [MatIcon, MatDialogContent, Tag, MatButton, ImageGallery],
  templateUrl: './work-details.html',
  styleUrls: ['./work-details.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkDetails {
  protected readonly TAG_COLORS = TAG_COLORS;

  protected readonly dialogRef = inject(MatDialogRef<WorkDetails>);
  protected readonly rawData = inject<{workId: string}>(MAT_DIALOG_DATA);
  protected readonly portfolioStore = inject(PortfolioStore);

  protected readonly workId = signal(this.rawData.workId).asReadonly()
  protected readonly showingWork = computed(()=>this.portfolioStore.worksById()[this.workId()]);

  openLink(url: string) {
    window.open(url, '_blank');
  }
}

