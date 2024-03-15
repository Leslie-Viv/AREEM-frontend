import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeregresosComponent } from './veregresos.component';

describe('VeregresosComponent', () => {
  let component: VeregresosComponent;
  let fixture: ComponentFixture<VeregresosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeregresosComponent]
    });
    fixture = TestBed.createComponent(VeregresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
