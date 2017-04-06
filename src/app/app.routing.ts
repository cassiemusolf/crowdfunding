import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundraiserComponent } from './fundraiser/fundraiser.component';
import { AboutComponent } from './about/about.component';
import { FundraiserDetailComponent } from './fundraiser-detail/fundraiser-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FundraiserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'fundraisers/:id',
    component: FundraiserDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
