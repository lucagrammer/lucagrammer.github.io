import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatChipAvatar} from '@angular/material/chips';
import {NgOptimizedImage} from '@angular/common';
import {ThemeButton} from '../ui/components/theme-button/theme-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatChipAvatar, NgOptimizedImage, ThemeButton],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
