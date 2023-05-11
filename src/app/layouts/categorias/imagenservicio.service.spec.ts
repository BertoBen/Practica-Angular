import { TestBed } from '@angular/core/testing';

import { ImagenservicioService } from './imagenservicio.service';

describe('ImagenservicioService', () => {
  let service: ImagenservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
