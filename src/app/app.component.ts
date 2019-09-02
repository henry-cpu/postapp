import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles = [
    {
      title: 'Comment perdre 10kg en 2 heures!',
      content: 'Alors, ca marche, je l ai essayé moi meme! La recette est bien...',
      loveIts: 2,
    },
    {
      title: 'Le surprenant secret de Angelina Jolie!',
      content: 'Apres l immese succes du film Mr & Mme Smith, revelation choc...',
      loveIts: 0,
    },
    {
      title: 'Devenir astronaute en 1 heure!',
      content: 'Vos vacances dans l espace sont prevu dans une semaine, mais ... ',
      loveIts: -1,
    }
  ];
}
