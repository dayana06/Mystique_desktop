import { TestBed, inject } from '@angular/core/testing';

import { RedSocialService } from './red-social.service';

describe('RedSocialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedSocialService]
    });
  });

  it('should be created', inject([RedSocialService], (service: RedSocialService) => {
    expect(service).toBeTruthy();
  }));
});
