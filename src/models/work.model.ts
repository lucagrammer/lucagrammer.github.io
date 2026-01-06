import {GalleryImage} from './gallery-image.model';

export interface Work {
  id: string;
  title: string;
  dateStart: string;
  dateEnd: string;
  tags: string[];
  subtitle: string;
  expandedSubtitle: string;
  subline: string;
  cover: string;
  url?: string;
  urlDisclaimer?: string;
  intro: string;
  images?: GalleryImage[];
  hidden?: boolean;
  repoUrl?: string;
}
