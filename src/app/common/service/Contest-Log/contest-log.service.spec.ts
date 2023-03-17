import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ContestLogService } from './contest-log.service';

describe('ContestLogService', () => {
  let service: ContestLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule ],
    });
    service = TestBed.inject(ContestLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
