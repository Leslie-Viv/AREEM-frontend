import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPerfilgerenteComponent } from './ver-perfilgerente.component';

describe('VerPerfilgerenteComponent', () => {
  let component: VerPerfilgerenteComponent;
  let fixture: ComponentFixture<VerPerfilgerenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPerfilgerenteComponent]
    });
    fixture = TestBed.createComponent(VerPerfilgerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
