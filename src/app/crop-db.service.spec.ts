import { TestBed } from '@angular/core/testing';

import { CropDBService } from './crop-db.service';

describe('CropDBService', () => {
  let service: CropDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CropDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
