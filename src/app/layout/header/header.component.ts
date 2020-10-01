import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public showMenuMobile = false;

  public routesMenu = [
    { name: 'About Us', link: '/about' },
    { name: 'Contact Us', link: '/contact' },
  ];

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth > 768 && this.showMenuMobile) {
      this.showMenuMobile = false;
    }
  }

  constructor() { }

  ngOnInit(): void { }

  onCloseSideMenu(event): void {
    this.showMenuMobile = event;
  }

}
