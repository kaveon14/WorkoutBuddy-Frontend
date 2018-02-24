import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubWorkoutComponent } from './sub-workout.component';

describe('SubWorkoutComponent', () => {
  let component: SubWorkoutComponent;
  let fixture: ComponentFixture<SubWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
