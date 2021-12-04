import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Favorite Photos";
  image1 =
    "https://s2.qwant.com/thumbr/700x0/d/5/09a282516bba83f708cb7afa4d5de7e1b620bc574d997e91be9d2f20cb1940/B9320723091Z.1_20160204132842_000_GFSDBE6ES.1-0.jpg?u=https%3A%2F%2Fwww.gannett-cdn.com%2F-mm-%2Fc72543f75dce47618e24dec54b682e2a5a0a7001%2Fc%3D0-86-1388-867%2Flocal%2F-%2Fmedia%2F2016%2F02%2F04%2FPoughkeepsie%2FB9320723091Z.1_20160204132842_000_GFSDBE6ES.1-0.jpg%3Fwidth%3D3200%26height%3D1680%26fit%3Dcrop&q=0&b=1&p=0&a=0";
  image2 =
    "https://s2.qwant.com/thumbr/0x380/4/1/be8ddd7dabf67a127495106e35daf41c30629bffcf376067cb96523d369bb2/WoodChuckfb.jpg?u=http%3A%2F%2Fwww.hatiandskoll.com%2Fwp-content%2Fuploads%2F2017%2F10%2FWoodChuckfb.jpg&q=0&b=1&p=0&a=0";
  image3 =
    "https://s2.qwant.com/thumbr/0x380/5/c/b8ee9f65ef2b398caac34957673ea1332ed9367f3765e575d09c522037f0bd/4924963898_b3a9cc7ae1_b.jpg?u=https%3A%2F%2Fc1.staticflickr.com%2F5%2F4141%2F4924963898_b3a9cc7ae1_b.jpg&q=0&b=1&p=0&a=0";

  constructor() {}

  ngOnInit() {}
}
