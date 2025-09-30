import { TestBed } from '@angular/core/testing';

import { FiveInSquareService } from './five-in-square.service';

describe('FiveInSquare', () => {
  let service: FiveInSquareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiveInSquareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
