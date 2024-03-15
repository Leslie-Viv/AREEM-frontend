import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrigendeegresoComponent } from './editar-origendeegreso.component';

describe('EditarOrigendeegresoComponent', () => {
  let component: EditarOrigendeegresoComponent;
  let fixture: ComponentFixture<EditarOrigendeegresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarOrigendeegresoComponent]
    });
    fixture = TestBed.createComponent(EditarOrigendeegresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
