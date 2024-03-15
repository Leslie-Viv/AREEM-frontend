import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomegerenteComponent } from './homegerente.component';

describe('HomegerenteComponent', () => {
  let component: HomegerenteComponent;
  let fixture: ComponentFixture<HomegerenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomegerenteComponent]
    });
    fixture = TestBed.createComponent(HomegerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
