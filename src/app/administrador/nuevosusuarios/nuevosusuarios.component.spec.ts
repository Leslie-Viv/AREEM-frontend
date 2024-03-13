import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosusuariosComponent } from './nuevosusuarios.component';

describe('NuevosusuariosComponent', () => {
  let component: NuevosusuariosComponent;
  let fixture: ComponentFixture<NuevosusuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevosusuariosComponent]
    });
    fixture = TestBed.createComponent(NuevosusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
