import { Component, OnInit } from "@angular/core";

@Component({
  selector: "chores",
  templateUrl: "./chores.component.html",
  styleUrls: ["./chores.component.css"],
})
export class ChoresComponent implements OnInit {
  chores = [
    ["Buy groceries", "Clean bathroom"],
    ["Wash behind woodchuck's ears", "Rake leaves"],
  ];
  todoTitles = ["Today's Chores", "Christmas Chores"];

  constructor() {}

  ngOnInit() {}
}
