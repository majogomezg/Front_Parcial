import { TestBed } from '@angular/core/testing';

import { ExamenServicesService } from './examen-services.service';

describe('ExamenServicesService', () => {
  let service: ExamenServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamenServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
