import { Component, OnInit } from '@angular/core';
import { Fundraiser } from '../fundraiser.model';
import { Router } from '@angular/router';
import { FundraiserService } from '../fundraiser.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-fundraiser',
  templateUrl: './fundraiser.component.html',
  styleUrls: ['./fundraiser.component.css'],
  providers: [FundraiserService]
})
export class FundraiserComponent implements OnInit {
  fundraisers: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private fundraiserService: FundraiserService){}

  ngOnInit(){
    this.fundraisers = this.fundraiserService.getFundraisers();
  }

  goToDetailPage(clickedFundraiser) {
    this.router.navigate(['fundraisers', clickedFundraiser.$key]);
  }

}
