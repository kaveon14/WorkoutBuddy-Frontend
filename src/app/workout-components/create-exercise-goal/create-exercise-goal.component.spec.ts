import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExerciseGoalComponent } from './create-exercise-goal.component';

describe('CreateExerciseGoalComponent', () => {
  let component: CreateExerciseGoalComponent;
  let fixture: ComponentFixture<CreateExerciseGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExerciseGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExerciseGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
