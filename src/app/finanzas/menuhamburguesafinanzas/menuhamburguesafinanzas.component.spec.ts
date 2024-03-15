import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhamburguesafinanzasComponent } from './menuhamburguesafinanzas.component';

describe('MenuhamburguesafinanzasComponent', () => {
  let component: MenuhamburguesafinanzasComponent;
  let fixture: ComponentFixture<MenuhamburguesafinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuhamburguesafinanzasComponent]
    });
    fixture = TestBed.createComponent(MenuhamburguesafinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
