import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModdalComponent } from './form-moddal.component';

describe('FormModdalComponent', () => {
  let component: FormModdalComponent;
  let fixture: ComponentFixture<FormModdalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModdalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModdalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
