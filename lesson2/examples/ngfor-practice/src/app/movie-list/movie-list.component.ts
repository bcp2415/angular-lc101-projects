import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies = ['My Life with Caroline', 'Never Give a Sucker an Even Break', 'Horse Feathers', 'Jeeves & Wooster', 'Ladies Who Do'];

  constructor() { }

  ngOnInit() {
  }

}