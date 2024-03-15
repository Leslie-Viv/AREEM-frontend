import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEgresosfinanzasComponent } from './ver-egresosfinanzas.component';

describe('VerEgresosfinanzasComponent', () => {
  let component: VerEgresosfinanzasComponent;
  let fixture: ComponentFixture<VerEgresosfinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerEgresosfinanzasComponent]
    });
    fixture = TestBed.createComponent(VerEgresosfinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
