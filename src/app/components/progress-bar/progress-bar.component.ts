import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  buttonText = 'Start progress';

  inProgress = false;

  seconds = 10;

  maxValue = 10;

  intervalId: number;

  steps : Step[] = [
    new Step("First Step", true), 
    new Step("Second Step", false), 
    new Step("Third Step", false), 
    new Step("Fourth Step", false),
    new Step("Fifth Step", false)];

  constructor() {}

  onButtonClick() {
    if (this.inProgress) {
      this.buttonText = 'Continue progress';
      clearInterval(this.intervalId);
    } else {
      this.buttonText = 'Stop progress';

      if (this.seconds === 0) {
        this.seconds = 10;
      }

      this.intervalId = window.setInterval(() => this.timer(), 1000);
    }
    this.inProgress = !this.inProgress;
  }

  timer() {
    this.seconds--;
    if (this.seconds == 0) {
      this.buttonText = 'Restart progress';
      this.inProgress = !this.inProgress;
      clearInterval(this.intervalId);
    }
  }

  format(ratio) {
    return `Loading: ${ratio * 100}%`;
  }
}


export class Step {
  constructor(public stepName: string, public isDone: boolean) {}
}
