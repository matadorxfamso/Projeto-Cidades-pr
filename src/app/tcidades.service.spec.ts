import { TestBed } from '@angular/core/testing';

import { TcidadesService } from './tcidades.service';

describe('TcidadesService', () => {
  let service: TcidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
