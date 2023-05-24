import { Component, OnInit } from '@angular/core';

import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit{

  public navItems = navItems;

  isOnline?: boolean;
  

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {
    this.isOnline = false;    
  }

  ngOnInit(): void {
    this.updateOnlineStatus();
  }

  private updateOnlineStatus(): void {
    this.isOnline = window.navigator.onLine;
    console.info(`isOnline=[${this.isOnline}]`);
  }
}
