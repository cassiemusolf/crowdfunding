import { Component, OnInit } from '@angular/core';
import { Fundraiser } from '../fundraiser.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { FundraiserService } from '../fundraiser.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FundraiserService]
})
export class AdminComponent implements OnInit {

  constructor(private fundraiserService: FundraiserService) { }

  ngOnInit() {
  }

  submitForm(title: string, name: string, category: string, description: string, goal: string) {
    var newFundraiser: Fundraiser = new Fundraiser(title, name, category, description, goal);
    this.fundraiserService.addFundraiser(newFundraiser);
  }

}
