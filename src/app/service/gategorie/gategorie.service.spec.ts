import { TestBed } from '@angular/core/testing';

import { GategorieService } from './gategorie.service';

describe('GategorieService', () => {
  let service: GategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
