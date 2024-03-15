import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerempresasComponent } from './verempresas.component';

describe('VerempresasComponent', () => {
  let component: VerempresasComponent;
  let fixture: ComponentFixture<VerempresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerempresasComponent]
    });
    fixture = TestBed.createComponent(VerempresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
