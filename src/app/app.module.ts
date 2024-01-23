import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/sideBar/side-bar/side-bar.component';
import { FrameComponent } from './components/Frame/frame/frame.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxDropDownBoxModule, DxMapModule, DxProgressBarModule, DxSelectBoxModule, DxTreeViewModule } from 'devextreme-angular';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TimePipePipe } from './pipes/time-pipe.pipe';
import { StepFormComponent } from './components/step-form/step-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleDropdownComponent } from './components/single-dropdown/single-dropdown.component';
import { HttpClientModule } from '@angular/common/http';
import { MultipleDropdownComponent } from './components/multiple-dropdown/multiple-dropdown.component';
import { FormTestComponent } from './components/form-test/form-test.component';
import { StepFormBaseComponent } from './components/step-form-base/step-form-base.component';
import { MapBaseComponent } from './components/map-base/map-base.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    FrameComponent,
    LoginComponent,
    RegisterComponent,
    ProgressBarComponent,
    TimePipePipe,
    StepFormComponent,
    SingleDropdownComponent,
    MultipleDropdownComponent,
    FormTestComponent,
    StepFormBaseComponent,
    MapBaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    DxDateBoxModule,
    DxMapModule,
    DxSelectBoxModule,
    DxProgressBarModule,
    DxButtonModule,
    ReactiveFormsModule,
    DxTreeViewModule,
    DxDropDownBoxModule,
    DxDataGridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
