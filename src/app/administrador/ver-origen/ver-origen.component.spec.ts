import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerOrigenComponent } from './ver-origen.component';

describe('VerOrigenComponent', () => {
  let component: VerOrigenComponent;
  let fixture: ComponentFixture<VerOrigenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerOrigenComponent]
    });
    fixture = TestBed.createComponent(VerOrigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
