import { TestBed, inject } from '@angular/core/testing';

import { AdminUserGuardService } from './admin-user-guard.service';

describe('AdminUserGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminUserGuardService]
    });
  });

  it('should be created', inject([AdminUserGuardService], (service: AdminUserGuardService) => {
    expect(service).toBeTruthy();
  }));
});
