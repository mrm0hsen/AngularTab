import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-step-form-base',
  templateUrl: './step-form-base.component.html',
  styleUrls: ['./step-form-base.component.css']
})
export class StepFormBaseComponent {
  @Input()
  stepIndex = 0;

  @Input()
  stepTabs: StepTab[];

  @Output()
  selectedTab = new EventEmitter<number>();

  constructor () {}

  DecrementStepIndex() {
    this.stepIndex--;
    this.selectedTab.emit(this.stepIndex);    
  }
  
  IncrementStepIndex() {
    this.stepIndex++;
    this.selectedTab.emit(this.stepIndex);
  }
  
}

export class StepTab {
  public name: string;
  public tabValid: boolean;
  constructor(name:string, tabValid:boolean){
    this.name = name;
    this.tabValid = tabValid;
  }
}
