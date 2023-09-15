import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVerifcationComponent } from './otp-verifcation.component';

describe('OtpVerifcationComponent', () => {
  let component: OtpVerifcationComponent;
  let fixture: ComponentFixture<OtpVerifcationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtpVerifcationComponent]
    });
    fixture = TestBed.createComponent(OtpVerifcationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
