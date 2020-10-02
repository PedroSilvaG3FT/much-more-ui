import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public routesMenu = [
    { name: 'About Us', link: '/about' },
    { name: 'Contact Us', link: '/contact' },
  ];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e): void {
    const element = document.querySelector('.header-container');

    if (window.pageYOffset > 11) {
      element.classList.add('header-style');
    } else {
      element.classList.remove('header-style');
    }
  }

  constructor() { }

  ngOnInit(): void { }

}
