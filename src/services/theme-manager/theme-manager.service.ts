import {computed, effect, inject, Injectable, signal} from '@angular/core';
import {ThemeMode} from '../../models/theme-mode.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {take} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeManager {
  private snackBar = inject(MatSnackBar);
  private readonly THEME_KEY = 'user-theme';
  private readonly NOTIFIED_KEY = 'theme-notified';
  readonly mode = signal<ThemeMode>((localStorage.getItem(this.THEME_KEY) as ThemeMode) || 'auto');
  readonly currentTheme = signal<Omit<ThemeMode, ThemeMode.AUTO>|undefined>(undefined)
  readonly currentThemeIsDark = computed(() => this.currentTheme() == ThemeMode.DARK)

  constructor() {
    // Sync DOM whenever mode or system preference changes
    effect(() => {
      this.syncTheme();
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (this.mode() === ThemeMode.AUTO) this.syncTheme();
    });

    // Show hint if they haven't set a preference yet
    if (!localStorage.getItem(this.NOTIFIED_KEY) && !localStorage.getItem(this.THEME_KEY)) {
      setTimeout(() => this.showThemeHint(), 1500);
    }
  }

  /**
   * Toggle the theme mode
   */
  toggleMode(forcedValue?:ThemeMode) {
    const modes: ThemeMode[] = [ThemeMode.AUTO, ThemeMode.LIGHT, ThemeMode.DARK];
    const nextIndex = (modes.indexOf(this.mode()) + 1) % modes.length;
    const nextMode = forcedValue ?? modes[nextIndex];

    this.mode.set(nextMode);
    localStorage.setItem(this.THEME_KEY, nextMode);
  }

  /**
   * Sync app theme with the OS one if needed
   * @private
   */
  private syncTheme() {
    const isDarkOS = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = this.mode() === ThemeMode.AUTO ? isDarkOS : this.mode() === ThemeMode.DARK;

    this.currentTheme.set(shouldBeDark? ThemeMode.DARK : ThemeMode.LIGHT);
    document.documentElement.classList.toggle('dark', shouldBeDark);
    document.documentElement.classList.toggle('dark-theme', shouldBeDark);
  }

  /**
   * Hint to disable/enable theme
   * @private
   */
  private showThemeHint() {

    const snackRef = this.snackBar.open(
      this.currentThemeIsDark()? `Dark mode enabled`: `Light mode enabled`,
      'Disable',
      { duration: 5000, horizontalPosition: 'center', verticalPosition: 'bottom' }
    );

    snackRef.onAction().pipe(take(1)).subscribe(() => {
      this.toggleMode(this.currentThemeIsDark() ? ThemeMode.LIGHT : ThemeMode.DARK);
    });

    localStorage.setItem(this.NOTIFIED_KEY, 'true');
  }
}
