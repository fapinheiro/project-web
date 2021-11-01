import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navItem: string;
  isAside: boolean;

  constructor() { }

  ngOnInit(): void {
    this.navItem = 'dashboard';
    this.isAside = false;
  }

  setNavItem(navItem: string, event: any) {
    this.navItem = navItem;
    event.stopPropagation();
  }

  setAside() {
    this.isAside = !this.isAside;
  }
}
