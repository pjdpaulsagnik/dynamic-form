import { TestBed } from '@angular/core/testing';

import { DynamicFormLibraryService } from './dynamic-form-library.service';

describe('DynamicFormLibraryService', () => {
  let service: DynamicFormLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicFormLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
