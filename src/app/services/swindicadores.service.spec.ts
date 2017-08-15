import { TestBed, inject } from '@angular/core/testing';

import { SwindicadoresService } from './swindicadores.service';

describe('SwindicadoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwindicadoresService]
    });
  });

  it('should be created', inject([SwindicadoresService], (service: SwindicadoresService) => {
    expect(service).toBeTruthy();
  }));
});
