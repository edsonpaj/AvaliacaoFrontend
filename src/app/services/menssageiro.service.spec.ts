import { TestBed } from '@angular/core/testing';

import { MenssageiroService } from './menssageiro.service';

describe('MenssageiroService', () => {
  let service: MenssageiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenssageiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
