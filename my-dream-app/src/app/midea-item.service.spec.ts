import { TestBed } from '@angular/core/testing';

import { MideaItemService } from './midea-item.service';

describe('MideaItemService', () => {
  let service: MideaItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MideaItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
