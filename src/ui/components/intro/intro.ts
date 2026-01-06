import {Component} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {NgOptimizedImage} from '@angular/common';
import {FocusTextCarousel} from '../focus-text-carousel/focus-text-carousel';
import {MatButton} from '@angular/material/button';
import {GET_IN_TOUCH_BODY, GET_IN_TOUCH_SUBJECT, LINKEDIN_URL, PERSONAL_EMAIL} from '../../../constants/links';

@Component({
  selector: 'app-intro',
  imports: [
    MatIcon,
    NgOptimizedImage,
    FocusTextCarousel,
    MatButton
  ],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro {
  protected readonly LINKEDIN_URL = LINKEDIN_URL;
  protected readonly MAIL_URL = `mailto:${PERSONAL_EMAIL}?subject=${encodeURIComponent(GET_IN_TOUCH_SUBJECT)}&body=${encodeURIComponent(GET_IN_TOUCH_BODY)}`;

  protected readonly infoLines: { icon: string; text: string; label: string }[]=[
    { icon: 'work', text:'Full-stack engineer', label: 'Work'},
    { icon: 'school', text:'Politecnico di Milano', label: 'Education'},
    { icon: 'location_on', text:'Milan, Italy', label: 'Location'},
  ];
}
