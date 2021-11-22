import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'existek-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(1);
  }
}
