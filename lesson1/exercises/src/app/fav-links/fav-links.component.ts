import { Component, OnInit } from "@angular/core";

@Component({
  selector: "links",
  templateUrl: "./fav-links.component.html",
  styleUrls: ["./fav-links.component.css"],
})
export class FavLinksComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  links = [
    "https://www.calnewport.com/",
    "https://blogs.ancientfaith.com/glory2godforallthings/",
  ];
}
