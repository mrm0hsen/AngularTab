import {Component} from '@angular/core';
import {TabObject} from "./Interfaces/tab-object";
import {TabServiceService} from "./Services/tab-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTab';
  lotsOfTabs:TabObject[] = new Array(0);

  constructor(private TabService:TabServiceService) {
    this.lotsOfTabs = TabService.tabArray;
  }

  closeTab(i: number) {
    this.TabService.CloseTab(i);
  }
}
