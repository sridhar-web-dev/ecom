import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Collections02Component } from './collections02.component';

describe('Collections02Component', () => {
  let component: Collections02Component;
  let fixture: ComponentFixture<Collections02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Collections02Component]
    });
    fixture = TestBed.createComponent(Collections02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
