import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhamburguesagerenteComponent } from './menuhamburguesagerente.component';

describe('MenuhamburguesagerenteComponent', () => {
  let component: MenuhamburguesagerenteComponent;
  let fixture: ComponentFixture<MenuhamburguesagerenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuhamburguesagerenteComponent]
    });
    fixture = TestBed.createComponent(MenuhamburguesagerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
