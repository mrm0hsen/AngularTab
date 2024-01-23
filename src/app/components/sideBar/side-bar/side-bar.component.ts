import {Component, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {TabServiceService} from "../../../Services/tab-service.service";
import {TabObject} from "../../../Interfaces/tab-object";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  constructor(private tabService: TabServiceService) {
  }

  addTabSample(title:string) {
    this.tabService.AddTab(new TabObject(title, 'LoginComponent'));
  }
}
