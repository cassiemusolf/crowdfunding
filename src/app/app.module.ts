import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { FundraiserComponent } from './fundraiser/fundraiser.component';
import { FundraiserDetailComponent } from './fundraiser-detail/fundraiser-detail.component';
import { masterFirebaseConfig } from './api-keys'
import { AngularFireModule } from 'angularfire2';
import { AdminComponent } from './admin/admin.component';
import { EditFundraiserComponent } from './edit-fundraiser/edit-fundraiser.component';
import { AddFundraiserComponent } from './add-fundraiser/add-fundraiser.component';
import { GroupPipe } from './group.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FundraiserComponent,
    FundraiserDetailComponent,
    AdminComponent,
    EditFundraiserComponent,
    AddFundraiserComponent,
    GroupPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
