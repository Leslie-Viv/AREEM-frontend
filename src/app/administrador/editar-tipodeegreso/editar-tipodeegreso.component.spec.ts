import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipodeegresoComponent } from './editar-tipodeegreso.component';

describe('EditarTipodeegresoComponent', () => {
  let component: EditarTipodeegresoComponent;
  let fixture: ComponentFixture<EditarTipodeegresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarTipodeegresoComponent]
    });
    fixture = TestBed.createComponent(EditarTipodeegresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
