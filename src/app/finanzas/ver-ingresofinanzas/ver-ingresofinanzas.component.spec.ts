import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerIngresofinanzasComponent } from './ver-ingresofinanzas.component';

describe('VerIngresofinanzasComponent', () => {
  let component: VerIngresofinanzasComponent;
  let fixture: ComponentFixture<VerIngresofinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerIngresofinanzasComponent]
    });
    fixture = TestBed.createComponent(VerIngresofinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
