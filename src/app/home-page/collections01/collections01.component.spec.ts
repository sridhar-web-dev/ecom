import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Collections01Component } from './collections01.component';

describe('Collections01Component', () => {
  let component: Collections01Component;
  let fixture: ComponentFixture<Collections01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Collections01Component]
    });
    fixture = TestBed.createComponent(Collections01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
