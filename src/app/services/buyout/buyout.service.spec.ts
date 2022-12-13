import { TestBed } from '@angular/core/testing';

import { BuyoutService } from './buyout.service';

describe('BuyoutService', () => {
  let service: BuyoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
