import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWorkoutComponent } from './main-workout.component';

describe('MainWorkoutComponent', () => {
  let component: MainWorkoutComponent;
  let fixture: ComponentFixture<MainWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
