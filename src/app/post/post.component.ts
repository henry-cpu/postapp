import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  // tslint:disable-next-line:variable-name
  create_at: Date;
  constructor() {
    this.create_at = new Date();
  }
  loveItsBoolean() {
    if (this.loveIts > 0) {
      return true;
    } else if (this.loveIts < 0) {
      return false;
    }
  }
  like(valeur) {
    if (valeur === true) {
      this.loveIts++;
    } else if (valeur === false) {
      this.loveIts--;
    }
  }
  ngOnInit() {
  }

}
