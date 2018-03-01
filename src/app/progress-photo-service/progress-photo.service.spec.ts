import { TestBed, inject } from '@angular/core/testing';

import { ProgressPhotoService } from './progress-photo.service';

describe('ProgressPhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressPhotoService]
    });
  });

  it('should be created', inject([ProgressPhotoService], (service: ProgressPhotoService) => {
    expect(service).toBeTruthy();
  }));
});
