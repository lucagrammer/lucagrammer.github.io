import {Component, input} from '@angular/core';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
})
export class Tag {
  readonly tag = input.required<string>();
  readonly tagColor = input<string>();

}
