import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginstateService } from './loginstate.service';

describe('LoginstateService', () => {
  let service: LoginstateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule ],
    });
    service = TestBed.inject(LoginstateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
