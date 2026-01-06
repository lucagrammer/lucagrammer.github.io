import {Component, HostListener, inject, signal} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton, MatMiniFabButton} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GalleryImage} from '../../../../../models/gallery-image.model';

@Component({
  selector: 'app-image-gallery-dialog',
  imports: [
    MatIcon,
    MatIconButton,
    MatMiniFabButton
  ],
  templateUrl: './image-gallery-dialog.html',
  styleUrl: './image-gallery-dialog.scss',
})
export class ImageGalleryDialog {
  readonly data = inject<{ images: GalleryImage[], initialIndex: number }>(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<ImageGalleryDialog>);

  currentIndex = signal(this.data.initialIndex);

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') this.next();
    if (event.key === 'ArrowLeft') this.prev();
    if (event.key === 'Escape') this.close();
  }

  next(event?: Event) {
    event?.stopPropagation();
    this.currentIndex.update(i => (i + 1) % this.data.images.length);
  }

  prev(event?: Event) {
    event?.stopPropagation();
    this.currentIndex.update(i => (i - 1 + this.data.images.length) % this.data.images.length);
  }

  close() {
    this.dialogRef.close();
  }
}
