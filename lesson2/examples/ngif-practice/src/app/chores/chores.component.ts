import { Component, OnInit } from "@angular/core";

@Component({
  selector: "chores",
  templateUrl: "./chores.component.html",
  styleUrls: ["./chores.component.css"],
})
export class ChoresComponent implements OnInit {
  chores = [
    "Empty dishwasher",
    "Complete LaunchCode prep work",
    "Buy groceries",
  ];
  finishedChores = [
    "Gave woodchuck his vitamins",
    "Sent dog out for beer",
    "Made coffee",
    "Took nap",
  ];

  targetImage = "../assets/target.png";

  constructor() {}

  ngOnInit() {}
}
