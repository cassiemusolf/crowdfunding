import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundraiserComponent } from './fundraiser/fundraiser.component';
import { AboutComponent } from './about/about.component';
import { FundraiserDetailComponent } from './fundraiser-detail/fundraiser-detail.component';
import { AdminComponent } from './admin/admin.component';
import { EditFundraiserComponent } from './edit-fundraiser/edit-fundraiser.component';
import { AddFundraiserComponent } from './add-fundraiser/add-fundraiser.component';

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
  },
  {
    path: 'add-fundraiser',
    component: AddFundraiserComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
