import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertipodeegresoComponent } from './vertipodeegreso.component';

describe('VertipodeegresoComponent', () => {
  let component: VertipodeegresoComponent;
  let fixture: ComponentFixture<VertipodeegresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VertipodeegresoComponent]
    });
    fixture = TestBed.createComponent(VertipodeegresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
