import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'existek-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    console.log(1);
  }
}
