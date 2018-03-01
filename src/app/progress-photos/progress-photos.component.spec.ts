import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressPhotosComponent } from './progress-photos.component';

describe('ProgressPhotosComponent', () => {
  let component: ProgressPhotosComponent;
  let fixture: ComponentFixture<ProgressPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
