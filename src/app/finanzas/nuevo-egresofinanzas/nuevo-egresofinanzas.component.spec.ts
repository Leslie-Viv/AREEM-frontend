import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEgresofinanzasComponent } from './nuevo-egresofinanzas.component';

describe('NuevoEgresofinanzasComponent', () => {
  let component: NuevoEgresofinanzasComponent;
  let fixture: ComponentFixture<NuevoEgresofinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoEgresofinanzasComponent]
    });
    fixture = TestBed.createComponent(NuevoEgresofinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
