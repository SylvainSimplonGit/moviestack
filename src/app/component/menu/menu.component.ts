import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
