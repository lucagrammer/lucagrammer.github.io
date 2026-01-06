import {Component, computed, inject} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import {ThemeManager} from '../../../services/theme-manager/theme-manager.service';
import {ThemeMode} from '../../../models/theme-mode.model';

@Component({
  selector: 'app-theme-button',
  imports: [
    MatTooltip,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './theme-button.html',
  styleUrl: './theme-button.scss',
})
export class ThemeButton {
  protected readonly themeManager = inject(ThemeManager);

  protected readonly CONFIGS: Record<ThemeMode, { icon: string, tooltip: string }> = {
    auto: { icon: 'routine', tooltip: 'Theme: System' },
    light: { icon: 'light_mode', tooltip: 'Theme: Light' },
    dark: { icon: 'dark_mode', tooltip: 'Theme: Dark' }
  };

  // Computed signal to update UI text/icon automatically
  protected readonly themeInfo = computed(() => {
    const mode = this.themeManager.mode();
    return this.CONFIGS[mode];
  });
}
