import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavWithoutJsComponent } from './nav-without-js.component';

describe('NavWithoutJsComponent', () => {
  let component: NavWithoutJsComponent;
  let fixture: ComponentFixture<NavWithoutJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavWithoutJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavWithoutJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
