import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.css']
})
export class StepFormComponent {
  stepForm: FormGroup;

  stepIndex = 0;
  //@Input()
  stepTabs: StepTab[] = [];

  constructor () {
    this.stepTabs.push(new StepTab('First Step', true),new StepTab('Second Step', true), new StepTab('Third Step', true));

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
      'emergencyNumber': new FormControl(stepEmergencyNumber, Validators.required)
    });
  }


  onSubmit(value) {
    console.log(value);
    
  }

  stepButtonClicked(i: number) {
    //validate previous tab:
    if(this.stepIndex === 0) {
      if(!this.stepForm.get('name').valid || !this.stepForm.get('adress').valid || !this.stepForm.get('phone').valid) {            
        this.stepTabs[this.stepIndex].tabValid = false;
      } else {
        this.stepTabs[this.stepIndex].tabValid = true;
      }
    } else if (this.stepIndex === 1) {
      if(!this.stepForm.get('workNumber').valid || !this.stepForm.get('workAdress').valid || !this.stepForm.get('workPhone').valid) {            
        this.stepTabs[this.stepIndex].tabValid = false;
      } else {
        this.stepTabs[this.stepIndex].tabValid = true;
      }
    } else {
      if(!this.stepForm.get('emergencyNumber').valid) {            
        this.stepTabs[this.stepIndex].tabValid = false;
      } else {
        this.stepTabs[this.stepIndex].tabValid = true;
      }
    }

    //change to new tab:
    this.stepIndex = i;
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
