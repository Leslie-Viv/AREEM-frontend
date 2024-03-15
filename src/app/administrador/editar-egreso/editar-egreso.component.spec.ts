import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEgresoComponent } from './editar-egreso.component';

describe('EditarEgresoComponent', () => {
  let component: EditarEgresoComponent;
  let fixture: ComponentFixture<EditarEgresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEgresoComponent]
    });
    fixture = TestBed.createComponent(EditarEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
