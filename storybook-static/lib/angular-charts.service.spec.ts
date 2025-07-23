import { TestBed } from '@angular/core/testing';

import { AngularChartsService } from './angular-charts.service';

describe('AngularChartsService', () => {
  let service: AngularChartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularChartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
