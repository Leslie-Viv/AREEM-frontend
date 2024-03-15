import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarOrigendeegresoComponent } from './agregar-origendeegreso.component';

describe('AgregarOrigendeegresoComponent', () => {
  let component: AgregarOrigendeegresoComponent;
  let fixture: ComponentFixture<AgregarOrigendeegresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarOrigendeegresoComponent]
    });
    fixture = TestBed.createComponent(AgregarOrigendeegresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
