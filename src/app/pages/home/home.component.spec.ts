import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set props to timer', () => {
    component.initializeTimer();
    fixture.detectChanges();
    expect(component.future).not.toEqual(null || undefined);
    expect(component.timer$).not.toEqual(null || undefined);
    expect(component.subscription).not.toEqual(null || undefined);
  });

  it('should validate info timer with 10 seconds', () => {
    component.timerInfo = component.setNewTimerValue(10);
    const expectTimerInfoTest = [
      { value: 0, label: 'Days' },
      { value: 0, label: 'Hours' },
      { value: 0, label: 'Minutes' },
      { value: 10, label: 'Seconds' },
    ];

    fixture.detectChanges();
    expect(component.timerInfo).toEqual(expectTimerInfoTest);
  });

  it('should validate info timer with 1 minute', () => {
    component.timerInfo = component.setNewTimerValue(60);
    const expectTimerInfoTest = [
      { value: 0, label: 'Days' },
      { value: 0, label: 'Hours' },
      { value: 1, label: 'Minutes' },
      { value: 0, label: 'Seconds' },
    ];

    fixture.detectChanges();
    expect(component.timerInfo).toEqual(expectTimerInfoTest);
  });

  it('should validate info timer with 1 Hours', () => {
    component.timerInfo = component.setNewTimerValue(3600);
    const expectTimerInfoTest = [
      { value: 0, label: 'Days' },
      { value: 1, label: 'Hours' },
      { value: 0, label: 'Minutes' },
      { value: 0, label: 'Seconds' },
    ];

    fixture.detectChanges();
    expect(component.timerInfo).toEqual(expectTimerInfoTest);
  });

  it('should validate info timer with 1 day', () => {
    component.timerInfo = component.setNewTimerValue(86400);
    const expectTimerInfoTest = [
      { value: 1, label: 'Days' },
      { value: 0, label: 'Hours' },
      { value: 0, label: 'Minutes' },
      { value: 0, label: 'Seconds' },
    ];

    fixture.detectChanges();
    expect(component.timerInfo).toEqual(expectTimerInfoTest);
  });
});
