import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPapeleraComponent } from './ver-papelera.component';

describe('VerPapeleraComponent', () => {
  let component: VerPapeleraComponent;
  let fixture: ComponentFixture<VerPapeleraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPapeleraComponent]
    });
    fixture = TestBed.createComponent(VerPapeleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
