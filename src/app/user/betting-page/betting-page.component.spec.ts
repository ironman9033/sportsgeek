import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BettingPageComponent } from './betting-page.component';
import { ActivatedRoute } from '@angular/router';

describe('BettingPageComponent', () => {
  let component: BettingPageComponent;
  let fixture: ComponentFixture<BettingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,MatDialogModule,MatSnackBarModule ],
      providers: [FormBuilder,{ provide: MatDialogRef, useValue: {} },{provide: ActivatedRoute,useValue: {}} ],
      declarations: [ BettingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
