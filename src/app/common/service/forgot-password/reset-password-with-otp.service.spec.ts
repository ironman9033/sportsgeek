import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ResetPasswordWithOtpService } from './reset-password-with-otp.service';

describe('ResetPasswordWithOtpService', () => {
  let service: ResetPasswordWithOtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule ],
    });
    service = TestBed.inject(ResetPasswordWithOtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
