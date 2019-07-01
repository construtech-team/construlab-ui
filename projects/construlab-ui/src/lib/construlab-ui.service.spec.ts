import { TestBed } from '@angular/core/testing';

import { ConstrulabUiService } from './construlab-ui.service';

describe('ConstrulabUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstrulabUiService = TestBed.get(ConstrulabUiService);
    expect(service).toBeTruthy();
  });
});
