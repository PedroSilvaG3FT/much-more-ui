import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private future: Date;
  private timer$: Observable<number>;
  private subscription: Subscription;

  public timerInfo = [
    { value: 0, label: 'Days' },
    { value: 0, label: 'Hours' },
    { value: 0, label: 'Minutes' },
    { value: 0, label: 'Seconds' },
  ];

  constructor() { }

  ngOnInit(): void {
    this.initializeTimer();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  initializeTimer(): void {
    const currentDate = new Date();
    this.future = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDay() - 1,
    );

    this.timer$ = interval(1000).pipe(map(() => {
      return Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
    }));

    this.subscription = this.timer$.subscribe((x) => this.timerInfo = this.setNewTimerValue(x));
  }

  setNewTimerValue(counter): any[] {
    if (counter === 0) {
      this.subscription.unsubscribe();
      return [];
    }

    const days = Math.floor(counter / 86400);
    counter -= days * 86400;

    const hours = Math.floor(counter / 3600) % 24;
    counter -= hours * 3600;

    const minutes = Math.floor(counter / 60) % 60;
    counter -= minutes * 60;

    const seconds = counter % 60;

    return [
      { value: days, label: 'Days' },
      { value: hours, label: 'Hours' },
      { value: minutes, label: 'Minutes' },
      { value: seconds, label: 'Seconds' },
    ];
  }

}
