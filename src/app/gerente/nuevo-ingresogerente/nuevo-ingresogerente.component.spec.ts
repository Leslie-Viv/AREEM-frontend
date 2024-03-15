import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoIngresogerenteComponent } from './nuevo-ingresogerente.component';

describe('NuevoIngresogerenteComponent', () => {
  let component: NuevoIngresogerenteComponent;
  let fixture: ComponentFixture<NuevoIngresogerenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoIngresogerenteComponent]
    });
    fixture = TestBed.createComponent(NuevoIngresogerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
