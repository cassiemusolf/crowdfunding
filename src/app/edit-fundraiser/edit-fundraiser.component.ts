import { Component, Input, OnInit } from '@angular/core';
import { Fundraiser } from '../fundraiser.model';
import { FundraiserService } from '../fundraiser.service';

@Component({
  selector: 'app-edit-fundraiser',
  templateUrl: './edit-fundraiser.component.html',
  styleUrls: ['./edit-fundraiser.component.css'],
  providers: [FundraiserService]
})
export class EditFundraiserComponent implements OnInit {

  @Input() selectedFundraiser;

  constructor(private fundraiserService: FundraiserService) { }

  ngOnInit() {
  }

  beginUpdatingFundraiser(fundraiserToUpdate){
    this.fundraiserService.updateFundraiser(fundraiserToUpdate);
  }
}
