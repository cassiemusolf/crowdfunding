import { Injectable } from '@angular/core';
import { Fundraiser } from './fundraiser.model';
import { FUNDRAISERS } from './mock-fundraisers';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FundraiserService {

  fundraisers: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.fundraisers = angularFire.database.list('fundraisers');
  }

  getFundraisers() {
    return this.fundraisers;
  }

  getFundraiserById(fundraiserId: string){
    for (var i = 0; i <= FUNDRAISERS.length - 1; i++) {
      if (FUNDRAISERS[i].id === fundraiserId) {
        return FUNDRAISERS[i];
      }
    }
  }

}
