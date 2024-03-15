import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaregresoComponent } from './agregaregreso.component';

describe('AgregaregresoComponent', () => {
  let component: AgregaregresoComponent;
  let fixture: ComponentFixture<AgregaregresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregaregresoComponent]
    });
    fixture = TestBed.createComponent(AgregaregresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
