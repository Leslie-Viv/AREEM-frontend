import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarUnidadesdenegocioComponent } from './agregar-unidadesdenegocio.component';

describe('AgregarUnidadesdenegocioComponent', () => {
  let component: AgregarUnidadesdenegocioComponent;
  let fixture: ComponentFixture<AgregarUnidadesdenegocioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarUnidadesdenegocioComponent]
    });
    fixture = TestBed.createComponent(AgregarUnidadesdenegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
