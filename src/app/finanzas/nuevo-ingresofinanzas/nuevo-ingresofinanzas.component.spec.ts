import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoIngresofinanzasComponent } from './nuevo-ingresofinanzas.component';

describe('NuevoIngresofinanzasComponent', () => {
  let component: NuevoIngresofinanzasComponent;
  let fixture: ComponentFixture<NuevoIngresofinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoIngresofinanzasComponent]
    });
    fixture = TestBed.createComponent(NuevoIngresofinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
