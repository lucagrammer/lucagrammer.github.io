import {ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {MAT_ICON_DEFAULT_OPTIONS, MatIconDefaultOptions, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig} from '@angular/material/dialog';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: MAT_ICON_DEFAULT_OPTIONS,
      useValue: { fontSet: 'material-symbols-rounded' } as MatIconDefaultOptions
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        width: '95vw',
        maxWidth: '1000px',
        height: '80vh',
        maxHeight: '1000px',
        autoFocus: false,
        hasBackdrop: true,
        panelClass: ['rounded-xl', 'full-height-dialog'],
      } as MatDialogConfig
    },
    provideAppInitializer(()=>{
      const matIconRegistry = inject(MatIconRegistry);
      const sanitizer = inject(DomSanitizer)
      matIconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
      matIconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
      return Promise.resolve(true);
    })
  ],
};

