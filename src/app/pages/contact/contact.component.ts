import { Component, OnInit } from '@angular/core';
import { ContactInterface } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contact: ContactInterface = {} as ContactInterface;
  public patternEmail = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';

  constructor() { }

  ngOnInit(): void { }

  sendContact(): void {
    console.log('contact :', this.contact);
  }
}
