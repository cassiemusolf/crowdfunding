import { Injectable } from '@angular/core';
import { Fundraiser } from './fundraiser.model';
import { FUNDRAISERS } from './mock-fundraisers';

@Injectable()
export class FundraiserService {

  constructor() { }

  getFundraisers() {
    return FUNDRAISERS;
  }

  getFundraiserById(fundraiserId: number){
    for (var i = 0; i <= FUNDRAISERS.length - 1; i++) {
      if (FUNDRAISERS[i].id === fundraiserId) {
        return FUNDRAISERS[i];
      }
    }
  }

}
