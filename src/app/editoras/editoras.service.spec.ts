/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditorasService } from './editoras.service';

describe('EditorasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorasService]
    });
  });

  it('should ...', inject([EditorasService], (service: EditorasService) => {
    expect(service).toBeTruthy();
  }));
});
