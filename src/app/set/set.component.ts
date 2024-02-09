import { Component } from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent {
  sidenavCollapsed: boolean = false;
  toggleSidenav() {           
    // Update the width based on the current width
    // this.sidenavWidth = this.sidenavWidth === '45px' ? '230px' : '45px';
    // this.togglewidth = this.togglewidth === '80px' ? '442px' : '80px';
    // this.toggleSubmenu = this.toggleSubmenu === '230px' ? '0px' : '230px'
    this.sidenavCollapsed = !this.sidenavCollapsed;
    // this.closeAllDropdowns();
  }
}
