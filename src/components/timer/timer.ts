import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Generated class for the TimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})
export class TimerComponent {

  isPause: boolean = false;

  timeInterval: any;

  @Input()
  time: number = 0;

  @Output()
  emitStopTimer = new EventEmitter();


  constructor() {
    this.startTimer();
  }


  startTimer() {
    this.isPause = false;
    this.timeInterval = setInterval(() => {
      if (this.time <= 0) {
        this.resetTimer();
      } else {
        this.time--;
      }
    }, 1000);
  }

  pauseTimer() {
    this.isPause = true;
    clearInterval(this.timeInterval);
  }

  resetTimer() {
    clearInterval(this.timeInterval);
    this.emitStopTimer.emit();
  }
}
