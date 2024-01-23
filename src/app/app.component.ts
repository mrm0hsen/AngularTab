import {Component} from '@angular/core';
import {TabObject} from "./Interfaces/tab-object";
import {TabServiceService} from "./Services/tab-service.service";
import { locale } from 'devextreme/localization';
import { MapBaseLocation } from './components/map-base/map-base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTab';
  x : any = locale("fa-IR"); 
  lotsOfTabs:TabObject[] = new Array(0);

  //map
  centerLocation: MapBaseLocation;
  selectedLocation: MapBaseLocation;
  
  constructor(private TabService:TabServiceService) {
    this.lotsOfTabs = TabService.tabArray;  
    
    //map
    this.centerLocation = new MapBaseLocation("35.70012933641762", "51.33836802832265");
    this.selectedLocation = this.centerLocation;

  }

  closeTab(i: number) {
    this.TabService.CloseTab(i);
  }

  //map
  onLocationChange(e) {
    this.selectedLocation = e;
    
  }

}
