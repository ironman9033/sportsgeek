import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageVenueComponent } from './admin-manage-venue.component';

describe('AdminManageVenueComponent', () => {
  let component: AdminManageVenueComponent;
  let fixture: ComponentFixture<AdminManageVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageVenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
