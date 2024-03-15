import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPerfilfinanzasComponent } from './ver-perfilfinanzas.component';

describe('VerPerfilfinanzasComponent', () => {
  let component: VerPerfilfinanzasComponent;
  let fixture: ComponentFixture<VerPerfilfinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPerfilfinanzasComponent]
    });
    fixture = TestBed.createComponent(VerPerfilfinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
