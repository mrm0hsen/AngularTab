import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { DxTreeViewComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-multiple-dropdown',
  templateUrl: './multiple-dropdown.component.html',
  styleUrls: ['./multiple-dropdown.component.css']
})
export class MultipleDropdownComponent {
  @ViewChild(DxTreeViewComponent, { static: false }) treeView;

  treeDataSource: any;

  treeBoxValue: string[];

  gridDataSource: any;

  gridBoxValue: number[] = [3];

  constructor(http: HttpClient) {
    this.treeDataSource = this.makeAsyncDataSource(http, 'treeProducts.json');
    this.gridDataSource = this.makeAsyncDataSource(http, 'customers.json');
    this.treeBoxValue = ['1_1'];
  }

  makeAsyncDataSource(http, jsonFile) {
    return new CustomStore({
      loadMode: 'raw',
      key: 'ID',
      load() {
        return lastValueFrom(http.get(`assets/data/${jsonFile}`));
      },
    });
  }

  onDropDownBoxValueChanged() {
    this.updateSelection(this.treeView && this.treeView.instance);
  }

  onTreeViewReady(e) {
    this.updateSelection(e.component);
  }

  updateSelection(treeView) {
    if (!treeView) return;

    if (!this.treeBoxValue) {
      treeView.unselectAll();
    }

    if (this.treeBoxValue) {
      this.treeBoxValue.forEach(((value) => {
        treeView.selectItem(value);
      }));
    }
  }

  onTreeViewSelectionChanged(e) {
    this.treeBoxValue = e.component.getSelectedNodeKeys();
  }
}
