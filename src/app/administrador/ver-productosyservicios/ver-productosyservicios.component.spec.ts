import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProductosyserviciosComponent } from './ver-productosyservicios.component';

describe('VerProductosyserviciosComponent', () => {
  let component: VerProductosyserviciosComponent;
  let fixture: ComponentFixture<VerProductosyserviciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerProductosyserviciosComponent]
    });
    fixture = TestBed.createComponent(VerProductosyserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
