import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {CurrentEmployment} from '../../components/current-employment/current-employment';
import {WorksSection} from '../../components/works-section/works-section';
import {Intro} from '../../components/intro/intro';

@Component({
  selector: 'app-home',
  imports: [
    MatIcon,
    CurrentEmployment,
    WorksSection,
    Intro,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {

}
