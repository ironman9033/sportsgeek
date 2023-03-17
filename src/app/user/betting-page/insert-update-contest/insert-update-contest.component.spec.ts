import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { InsertUpdateContestComponent } from './insert-update-contest.component';
import { ActivatedRoute } from '@angular/router';

describe('InsertUpdateContestComponent', () => {
  let component: InsertUpdateContestComponent;
  let fixture: ComponentFixture<InsertUpdateContestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,MatDialogModule,MatSnackBarModule ],
      providers: [FormBuilder,{ provide: MatDialogRef, useValue: {} },{provide: ActivatedRoute,useValue: {}} ],
      declarations: [ InsertUpdateContestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertUpdateContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
