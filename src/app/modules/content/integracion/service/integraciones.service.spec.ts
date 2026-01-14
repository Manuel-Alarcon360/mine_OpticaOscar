import { TestBed } from '@angular/core/testing';

import { IntegracionesService } from './integraciones.service';

describe('IntegracionesService', () => {
  let service: IntegracionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntegracionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
