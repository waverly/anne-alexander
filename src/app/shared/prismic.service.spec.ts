/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrismicService } from './prismic.service';

describe('PrismicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrismicService]
    });
  });

  it('should ...', inject([PrismicService], (service: PrismicService) => {
    expect(service).toBeTruthy();
  }));
});
