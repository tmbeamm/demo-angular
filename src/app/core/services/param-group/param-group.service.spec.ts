import { TestBed } from '@angular/core/testing';

import { ParamGroupService } from './param-group.service';

describe('ParamGroupService', () => {
  let service: ParamGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
