import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [];
   finishedChores = ['Eat lunch', 'Send dog out for beer', 'Make coffee'];
   holding = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries']

   targetImage = 'https://static.vecteezy.com/system/resources/previews/000/425/420/original/bullseye-icon-vector-illustration.jpg&cdnurl=https://th.bing.com/th/id/R.7bbf6684402e99888992773b36588461?rik=QYi1x3s352Wx8A&pid=ImgRaw&r=0&exph=5120&expw=5120&q=Bullseye+Vector+Art&simid=608035990514907388&form=IRPRST&ck=32D83A3F9FC97679A41FB1BEDACDEC27&selectedindex=9&adlt=strict&safesearch=strict&shtp=GetUrl&shid=41d22c96-b5ae-4a8c-9c97-13854807177a&shtk=QnVsbHNleWUgSWNvbiBWZWN0b3IgSWxsdXN0cmF0aW9uIDQyNTQyMCAtIERvd25sb2FkIEZyZWUgLi4u&shdk=Rm91bmQgb24gQmluZyBmcm9tIHd3dy52ZWN0ZWV6eS5jb20%3D&shhk=NJFXSWR8In9a7P8%2Bgplo10gZ0MFFrhUltNuTpF0OAg4%3D&shth=OIP.e79mhEAumYiJknc7NliEYQHaHa';

   constructor() { }

   ngOnInit() {
   }

}
