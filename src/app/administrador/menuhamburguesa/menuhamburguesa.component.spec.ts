import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhamburguesaComponent } from './menuhamburguesa.component';

describe('MenuhamburguesaComponent', () => {
  let component: MenuhamburguesaComponent;
  let fixture: ComponentFixture<MenuhamburguesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuhamburguesaComponent]
    });
    fixture = TestBed.createComponent(MenuhamburguesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
