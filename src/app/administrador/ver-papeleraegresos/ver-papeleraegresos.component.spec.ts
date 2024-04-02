import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPapeleraegresosComponent } from './ver-papeleraegresos.component';

describe('VerPapeleraegresosComponent', () => {
  let component: VerPapeleraegresosComponent;
  let fixture: ComponentFixture<VerPapeleraegresosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPapeleraegresosComponent]
    });
    fixture = TestBed.createComponent(VerPapeleraegresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
