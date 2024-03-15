import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEgresogerenteComponent } from './ver-egresogerente.component';

describe('VerEgresogerenteComponent', () => {
  let component: VerEgresogerenteComponent;
  let fixture: ComponentFixture<VerEgresogerenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerEgresogerenteComponent]
    });
    fixture = TestBed.createComponent(VerEgresogerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
