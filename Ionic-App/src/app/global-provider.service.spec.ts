import { TestBed } from '@angular/core/testing';

import { GlobalProviderService } from './global-provider.service';

describe('GlobalProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalProviderService = TestBed.get(GlobalProviderService);
    expect(service).toBeTruthy();
  });
});
