/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoriasService } from './categoria.service';

describe('CategoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriasService]
    });
  });

  it('should ...', inject([CategoriasService], (service: CategoriasService) => {
    expect(service).toBeTruthy();
  }));
});