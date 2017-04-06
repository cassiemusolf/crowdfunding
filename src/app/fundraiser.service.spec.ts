/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FundraiserService } from './fundraiser.service';

describe('FundraiserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FundraiserService]
    });
  });

  it('should ...', inject([FundraiserService], (service: FundraiserService) => {
    expect(service).toBeTruthy();
  }));
});
