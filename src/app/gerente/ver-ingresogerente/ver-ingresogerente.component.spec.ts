import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerIngresogerenteComponent } from './ver-ingresogerente.component';

describe('VerIngresogerenteComponent', () => {
  let component: VerIngresogerenteComponent;
  let fixture: ComponentFixture<VerIngresogerenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerIngresogerenteComponent]
    });
    fixture = TestBed.createComponent(VerIngresogerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
