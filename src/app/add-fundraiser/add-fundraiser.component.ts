import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fundraiser } from '../fundraiser.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { FundraiserService } from '../fundraiser.service';

@Component({
  selector: 'app-add-fundraiser',
  templateUrl: './add-fundraiser.component.html',
  styleUrls: ['./add-fundraiser.component.css'],
  providers: [FundraiserService]
})
export class AddFundraiserComponent implements OnInit {

  constructor(private router: Router, private fundraiserService: FundraiserService) { }

  ngOnInit() {
  }

  submitForm(title: string, name: string, category: string, description: string, goal: string, image: string) {
    var newFundraiser: Fundraiser = new Fundraiser(title, name, category, description, goal, image);
    this.fundraiserService.addFundraiser(newFundraiser);
    this.router.navigate(['']);
  }

}
