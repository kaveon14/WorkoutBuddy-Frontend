import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubWorkoutDetailComponent } from './sub-workout-detail.component';

describe('SubWorkoutDetailComponent', () => {
  let component: SubWorkoutDetailComponent;
  let fixture: ComponentFixture<SubWorkoutDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubWorkoutDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubWorkoutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
