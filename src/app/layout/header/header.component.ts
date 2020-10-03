import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public routesMenu = [
    { name: 'Home', link: '', show: false },
    { name: 'About Us', link: '/about', show: true },
    { name: 'Contact Us', link: '/contact', show: true },
  ];

  constructor(private router: Router) {

    router.events.subscribe((routeEvent) => {
      if (routeEvent instanceof NavigationEnd) {
        this.validateURL(routeEvent.url);
      }
    });
  }

  validateURL(url: string): void {
    if (url === '/') {
      this.routesMenu[0].show = false;
      this.routesMenu[1].show = true;
    } else {
      this.routesMenu[0].show = true;
      this.routesMenu[1].show = false;
    }
  }

  ngOnInit(): void { }

}
