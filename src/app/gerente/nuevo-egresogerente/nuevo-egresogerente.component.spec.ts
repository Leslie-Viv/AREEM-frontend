import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEgresogerenteComponent } from './nuevo-egresogerente.component';

describe('NuevoEgresogerenteComponent', () => {
  let component: NuevoEgresogerenteComponent;
  let fixture: ComponentFixture<NuevoEgresogerenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoEgresogerenteComponent]
    });
    fixture = TestBed.createComponent(NuevoEgresogerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
