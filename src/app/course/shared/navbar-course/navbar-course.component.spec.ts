import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCourseComponent } from './navbar-course.component';

describe('NavbarCourseComponent', () => {
  let component: NavbarCourseComponent;
  let fixture: ComponentFixture<NavbarCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
