import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles = [
    {
      title: 'Comment perdre 10kg en 2 heures',
      content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      loveIts: 2,
    },
    {
      title: 'Le surprenant secret de Angelina Jolie',
      content: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
      loveIts: 0,
    },
    {
      title: 'Devenir astronaute en 1 heure',
      content: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      loveIts: -1,
    }
  ];
}
