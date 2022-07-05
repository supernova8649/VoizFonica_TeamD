import { TestBed } from '@angular/core/testing';

import { NewconnectionService } from './newconnection.service';

describe('NewconnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewconnectionService = TestBed.get(NewconnectionService);
    expect(service).toBeTruthy();
  });
});
