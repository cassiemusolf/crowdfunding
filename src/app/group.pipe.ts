import {Pipe, PipeTransform} from '@angular/core';
import {Fundraiser} from './fundraiser.model';

@Pipe({
  name: "group",
  pure: false
})

export class GroupPipe implements PipeTransform {

  transform(input: Fundraiser[], desiredCategory) {
    var output: Fundraiser[] = [];

    if (desiredCategory === "Animals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Animals") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "Medical") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Medical") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "Volunteer") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Volunteer") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "Business") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Business") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "Charity") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Charity") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "Travel") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Travel") {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if (desiredCategory === "Family") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Family") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "Creative") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Creative") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "Other") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Other") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
