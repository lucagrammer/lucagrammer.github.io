import {initialPortfolioState} from './portfolio.state';
import {signalStore, withComputed, withState} from '@ngrx/signals';
import {computed} from '@angular/core';

export const PortfolioStore = signalStore(
  { providedIn: 'root' },

  withState(initialPortfolioState),

  withComputed((store) => ({
    worksById: computed(() => Object.fromEntries(store.works().map(work => [work.id, work]))),
  })),
);
