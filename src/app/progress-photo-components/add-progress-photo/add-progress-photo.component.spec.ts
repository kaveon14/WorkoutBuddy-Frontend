import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProgressPhotoComponent } from './add-progress-photo.component';

describe('AddProgressPhotoComponent', () => {
  let component: AddProgressPhotoComponent;
  let fixture: ComponentFixture<AddProgressPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProgressPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProgressPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
