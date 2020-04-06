import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar-menu',
  templateUrl: './top-bar-menu.component.html',
  styleUrls: ['./top-bar-menu.component.css']
})
export class TopBarMenuComponent implements OnInit {

  public menuDetails = {
    users: [
      'Gerard Menltant',
      'Al Kollyck',
      'Corine Titgoute'
    ],
    movies: [
      {
        label: 'Accueil',
        link: '/'
      },
      {
        label: 'Ma liste',
        link: '/'
      },
      {
        label: 'Ajouter',
        link: ''
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
