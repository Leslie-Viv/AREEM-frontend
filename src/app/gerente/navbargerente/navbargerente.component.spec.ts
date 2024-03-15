import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbargerenteComponent } from './navbargerente.component';

describe('NavbargerenteComponent', () => {
  let component: NavbargerenteComponent;
  let fixture: ComponentFixture<NavbargerenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbargerenteComponent]
    });
    fixture = TestBed.createComponent(NavbargerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
