import { TestBed } from '@angular/core/testing';

import { SearchboxService } from './searchbox.service';

describe('SearchboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchboxService = TestBed.get(SearchboxService);
    expect(service).toBeTruthy();
  });
});
