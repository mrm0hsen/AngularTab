import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { DxTreeViewComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-single-dropdown',
  templateUrl: './single-dropdown.component.html',
  styleUrls: ['./single-dropdown.component.css']
})
export class SingleDropdownComponent {
  @ViewChild(DxTreeViewComponent, { static: false }) treeView;

  treeDataSource: any;

  treeBoxValue: string;

  isTreeBoxOpened: boolean;

  gridDataSource: any;

  gridBoxValue: number[] = [3];

  isGridBoxOpened: boolean;

  gridColumns: any = ['CompanyName', 'City', 'Phone'];

  constructor(private httpClient: HttpClient, private ref: ChangeDetectorRef) {
    this.treeDataSource = this.makeAsyncDataSource(this.httpClient, 'treeProducts.json');
    this.gridDataSource = this.makeAsyncDataSource(this.httpClient, 'customers.json');
    this.isTreeBoxOpened = false;
    this.isGridBoxOpened = false;
    this.treeBoxValue = '1_1';
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

  syncTreeViewSelection() {
    if (!this.treeView) return;

    if (!this.treeBoxValue) {
      this.treeView.instance.unselectAll();
    } else {
      this.treeView.instance.selectItem(this.treeBoxValue);
    }
  }

  treeView_itemSelectionChanged(e) {
    this.treeBoxValue = e.component.getSelectedNodeKeys();
  }

  gridBox_displayExpr(item) {
    return item && `${item.CompanyName} <${item.Phone}>`;
  }

  onTreeBoxOptionChanged(e) {
    if (e.name === 'value') {
      this.isTreeBoxOpened = false;
      this.ref.detectChanges();
    }
  }

  onGridBoxOptionChanged(e) {
    if (e.name === 'value') {
      this.isGridBoxOpened = false;
      this.ref.detectChanges();
    }
  }
}
