import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Fundraiser } from '../fundraiser.model';
import { FundraiserService } from '../fundraiser.service';

@Component({
  selector: 'app-fundraiser-detail',
  templateUrl: './fundraiser-detail.component.html',
  styleUrls: ['./fundraiser-detail.component.css'],
  providers: [FundraiserService]
})

export class FundraiserDetailComponent implements OnInit {
  fundraiserId: number;
  fundraiserToDisplay: Fundraiser;

  constructor(private route: ActivatedRoute, private location: Location, private fundraiserService: FundraiserService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.fundraiserId = parseInt(urlParameters['id']);
    });
    this.fundraiserToDisplay = this.fundraiserService.getFundraiserById(this.fundraiserId);
  }
}
