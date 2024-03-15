import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUnidadesdenegocioComponent } from './editar-unidadesdenegocio.component';

describe('EditarUnidadesdenegocioComponent', () => {
  let component: EditarUnidadesdenegocioComponent;
  let fixture: ComponentFixture<EditarUnidadesdenegocioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarUnidadesdenegocioComponent]
    });
    fixture = TestBed.createComponent(EditarUnidadesdenegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
