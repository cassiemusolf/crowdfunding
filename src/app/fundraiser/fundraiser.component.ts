import { Component } from '@angular/core';
import { Fundraiser } from '../fundraiser.model';

@Component({
  selector: 'app-fundraiser',
  templateUrl: './fundraiser.component.html',
  styleUrls: ['./fundraiser.component.css']
})
export class FundraiserComponent {

  fundraisers: Fundraiser[] = [
    new Fundraiser("Radley Gillis' Medical Fund", "Nadia Abed", "Medical", "On Tuesday, April 4th, a terrible tragedy occured. A dear friend, a perfect son, an amazing member of the community got into a horrific motorcycle accident. Luckily, his best friend was there to assist him with immediate care and get him to a hospital where they are currently working to stabilize him. Radley Gillis is loved by so many.  Anyone who knows him knows that he has the kindest heart and is the friendliest, most outgoing person always willing to lend a hand. He is hardworking, dedicated, and very active. This incident is surely a devastating one whether you know Radley, know of him, or not at all. We want everyone to know how special he is and to know how appreciated a donation of any amount would be. We are praying and sending so much love to his family and friends. Please consider donating whereas all proceeds will go directly to Radley's medical care and his long road to recovery. Thank you so much in advance.", 65000, 1),
    new Fundraiser("Feed the Starving in Turkana Africa", "Jonathan Otto", "Volunteer", "Last week I had a friend send me a picture of man that died of starvation. He had an empty water bottle in his hand. I asked him where he got the picture and he said he took it with his phone and that it was along the route home for him back from work. It was literally taken on his phone. It horrified me that this poor man would have suffered so much and that he died, not because of a lack of food, because food is available in this world, and in this country, but it was for lack of love; love in action. About 3 days later my wife and I booked a ticket to Kenya and I got on the a flight the following day. And I brought my right hand man, filmmaker Eithel Krauss who made the sacrifice to come out to use his gifts to capture what's happening here. My wife, Lori Otto has had the dream to change lives in Africa and this is the fulfillment of that vision. She is a volunteer, and helping to lead this volunteer mission. We have 5 people on the ground volunteering, and Lori is coordinating that effort and the needs of that operation. ", 150000, 2),
    new Fundraiser("Toddy's Surgery Fund", "Cj Salvador", "Animals", "Tod is a 7 month old chow chow born with a birth defect called sever hip dysplacia. Long story short, by the time he turns 1, he wont be able to walk, run, let alone play. The surgery however, will cost around $8000. So I am humbley asking you to donate anything.  Anything would be greatly appreciated.", 8000, 3)
  ];

}
