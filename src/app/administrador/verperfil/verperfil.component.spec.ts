import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerperfilComponent } from './verperfil.component';

describe('VerperfilComponent', () => {
  let component: VerperfilComponent;
  let fixture: ComponentFixture<VerperfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerperfilComponent]
    });
    fixture = TestBed.createComponent(VerperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
