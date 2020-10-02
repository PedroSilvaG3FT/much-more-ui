import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public timer = [
    { value: 120, label: 'Days' },
    { value: 21, label: 'Hours' },
    { value: 17, label: 'Minutes' },
    { value: 25, label: 'Seconds' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
