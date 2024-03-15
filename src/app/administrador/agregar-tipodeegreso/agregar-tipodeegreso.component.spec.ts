import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTipodeegresoComponent } from './agregar-tipodeegreso.component';

describe('AgregarTipodeegresoComponent', () => {
  let component: AgregarTipodeegresoComponent;
  let fixture: ComponentFixture<AgregarTipodeegresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarTipodeegresoComponent]
    });
    fixture = TestBed.createComponent(AgregarTipodeegresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
