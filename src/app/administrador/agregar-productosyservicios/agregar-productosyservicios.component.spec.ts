import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProductosyserviciosComponent } from './agregar-productosyservicios.component';

describe('AgregarProductosyserviciosComponent', () => {
  let component: AgregarProductosyserviciosComponent;
  let fixture: ComponentFixture<AgregarProductosyserviciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarProductosyserviciosComponent]
    });
    fixture = TestBed.createComponent(AgregarProductosyserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
