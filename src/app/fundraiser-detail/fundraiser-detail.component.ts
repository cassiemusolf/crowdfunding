import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Fundraiser } from '../fundraiser.model';

@Component({
  selector: 'app-fundraiser-detail',
  templateUrl: './fundraiser-detail.component.html',
  styleUrls: ['./fundraiser-detail.component.css']
})
export class FundraiserDetailComponent implements OnInit {
  fundraiserId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.fundraiserId = parseInt(urlParameters['id']);
    });
  }
}
