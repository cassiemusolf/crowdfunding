import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundraiserComponent } from './fundraiser/fundraiser.component';
import { AboutComponent } from './about/about.component';
import { FundraiserDetailComponent } from './fundraiser-detail/fundraiser-detail.component';
import { AdminComponent } from './admin/admin.component';
import { EditFundraiserComponent } from './edit-fundraiser/edit-fundraiser.component';

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
  },
  {
    path: 'admin',
    component: AdminComponent
  }
  // {
  //   path: 'fundraisers/:id/edit-fundraiser',
  //   component: EditFundraiserComponent
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
