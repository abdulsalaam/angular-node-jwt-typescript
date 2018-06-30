import { TestBed, inject } from '@angular/core/testing';
import { AnonymousUserGuard } from './anonymous-user-guard.service';



describe('AnonymousUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnonymousUserGuard]
    });
  });

  it('should be created', inject([AnonymousUserGuard], (service: AnonymousUserGuard) => {
    expect(service).toBeTruthy();
  }));
});
