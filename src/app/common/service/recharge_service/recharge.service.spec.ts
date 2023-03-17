import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RechargeService } from './recharge.service';

describe('RechargeService', () => {
  let service: RechargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule ],
    });
    service = TestBed.inject(RechargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
