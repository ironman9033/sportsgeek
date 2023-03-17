import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserStaticticsService } from './user-statictics.service';

describe('UserStaticticsService', () => {
  let service: UserStaticticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule ],
    });
    service = TestBed.inject(UserStaticticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
