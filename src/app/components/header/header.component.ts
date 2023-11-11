import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  tabsHidden:boolean = false;

  openTabs(){
    this.tabsHidden = !this.tabsHidden
    if (this.tabsHidden){
      document.querySelector(".tabs")?.classList.remove("hidden")
    }
    else{
      document.querySelector(".tabs")?.classList.add("hidden")
    }
  }

}
