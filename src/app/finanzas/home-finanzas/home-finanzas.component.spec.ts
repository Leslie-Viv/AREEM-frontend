import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFinanzasComponent } from './home-finanzas.component';

describe('HomeFinanzasComponent', () => {
  let component: HomeFinanzasComponent;
  let fixture: ComponentFixture<HomeFinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFinanzasComponent]
    });
    fixture = TestBed.createComponent(HomeFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
