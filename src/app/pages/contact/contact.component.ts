import { Component, OnInit } from '@angular/core';
import { ContactInterface } from 'src/app/interfaces/contact';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contact: ContactInterface = {} as ContactInterface;
  public patternEmail = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void { }

  sendContact(): void {
    const contactList = this.returnContactList();
    contactList.push(this.contact);

    this.localStorageService.setItem(environment.CONTACT_KEY, JSON.stringify(contactList));
    this.contact = {} as ContactInterface;
  }

  returnContactList(): ContactInterface[] {
    const contactsStorage = this.localStorageService.getItem(environment.CONTACT_KEY);
    return JSON.parse(contactsStorage) || [];
  }
}
