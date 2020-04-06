import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  forTest = Array.from({length: 50}, (v,k) => 'Ligne ' + k);
  constructor() { }

  ngOnInit(): void {
  }

}
