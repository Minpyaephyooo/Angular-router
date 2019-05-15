import { TestBed } from '@angular/core/testing';

import { BmserviceService } from './bmservice.service';

describe('BmserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BmserviceService = TestBed.get(BmserviceService);
    expect(service).toBeTruthy();
  });
});
