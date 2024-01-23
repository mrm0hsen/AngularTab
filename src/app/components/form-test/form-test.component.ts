import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StepTab } from '../step-form-base/step-form-base.component';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent {
  stepIndex = 0; 
  stepTabs: StepTab[]= [];

  selectedTab: number = 0;

  stepForm: FormGroup;

  constructor() {
    this.stepTabs.push(new StepTab('First Step', true),new StepTab('Second Step', true), new StepTab('Third Step', true), new StepTab('Fourth Step', true));

    //section 1
    let stepName = '';
    let stepAdress = '';
    let stepPhone = '';

    //section 2
    let stepWorkName = '';
    let stepWorkAdress = '';
    let stepWorkPhone = '';
    
    //section 3
    let stepEmergencyNumber = '';
    
    //section 4
    let stepEmergencyNumber2 = '';

    this.stepForm = new FormGroup({
      //section 1 
      'name': new FormControl(stepName, Validators.required),
      'adress': new FormControl(stepAdress, Validators.required),
      'phone': new FormControl(stepPhone, Validators.required),
      //section 2
      'workNumber': new FormControl(stepWorkName, Validators.required),
      'workAdress': new FormControl(stepWorkAdress, Validators.required),
      'workPhone': new FormControl(stepWorkPhone, Validators.required),
      //section 3 
      'emergencyNumber': new FormControl(stepEmergencyNumber, Validators.required),
      //section 4
      'emergencyNumber2': new FormControl(stepEmergencyNumber2, Validators.required)
    });
  }

  onSubmit(value) {
    console.log(value);
    
  }

  onTabChange(e) {
    this.selectedTab = e;
  }

}
