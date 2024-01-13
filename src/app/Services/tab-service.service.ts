import {inject, Injectable, ViewContainerRef} from '@angular/core';
import {TabObject} from "../Interfaces/tab-object";

@Injectable({
  providedIn: 'root'
})
export class TabServiceService {

  tabArray: TabObject[] = [];

  public AddTab(TabObject: TabObject){
    this.tabArray.push(TabObject);
  }

  public CloseTab(i:number){
    this.tabArray.splice(i,1);
  }
  constructor() {
/*    this.tabArray.push(
      new TabObject("Test Tab 1","Test Content 1"));
    this.tabArray.push(
      new TabObject("Test Tab 2","Test Content 2"));
    this.tabArray.push(
      new TabObject("Test Tab 3","Test Content 3"));*/
  }
}
