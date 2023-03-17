import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BotService } from './bot.service';

describe('BotService', () => {
  let service: BotService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule ],
    });
    service = TestBed.inject(BotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
