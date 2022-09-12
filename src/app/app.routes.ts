import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'alergias',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'mfe-alergias',
      exposedModule: './Module'
    })
      .then(m => m.AlergiasModule)
  },

  {
    path: 'patientcare',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'mfe-patientcare',
      exposedModule: './Module'
    }).then(m => m.PlantaModule)
  },
];
