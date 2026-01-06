import {Component, inject, input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ImageGalleryDialog} from './subcomponents/image-gallery-dialog/image-gallery-dialog';
import {GalleryImage} from '../../../models/gallery-image.model';

@Component({
  selector: 'app-image-gallery',
  imports: [],
  templateUrl: './image-gallery.html',
  styleUrl: './image-gallery.scss',
})
export class ImageGallery {
  images = input<GalleryImage[],GalleryImage[]|undefined>([],{ transform: v => v ??[]});

  private dialog = inject(MatDialog);

  openGallery(index: number) {
    this.dialog.open(ImageGalleryDialog, {
      data: { images: this.images(), initialIndex: index },
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
    });
  }
}
