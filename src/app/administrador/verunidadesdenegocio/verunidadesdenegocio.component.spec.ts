import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerunidadesdenegocioComponent } from './verunidadesdenegocio.component';

describe('VerunidadesdenegocioComponent', () => {
  let component: VerunidadesdenegocioComponent;
  let fixture: ComponentFixture<VerunidadesdenegocioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerunidadesdenegocioComponent]
    });
    fixture = TestBed.createComponent(VerunidadesdenegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
