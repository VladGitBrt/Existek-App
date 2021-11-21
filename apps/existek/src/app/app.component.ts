import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../../libs/api-interfaces/src/lib/api-interfaces';

@Component({
  selector: 'existek-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentUser!: IUser;
  ngOnInit(): void {
    console.log(1);
  }
}
