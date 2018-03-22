import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseGoalDetailsComponent } from './exercise-goal-details.component';

describe('ExerciseGoalDetailsComponent', () => {
  let component: ExerciseGoalDetailsComponent;
  let fixture: ComponentFixture<ExerciseGoalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseGoalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseGoalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
