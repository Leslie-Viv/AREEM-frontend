import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarfinanzasComponent } from './navbarfinanzas.component';

describe('NavbarfinanzasComponent', () => {
  let component: NavbarfinanzasComponent;
  let fixture: ComponentFixture<NavbarfinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarfinanzasComponent]
    });
    fixture = TestBed.createComponent(NavbarfinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
