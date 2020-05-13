import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Com3Component } from './com3.component';

describe('Com3Component', () => {
  let component: Com3Component;
  let fixture: ComponentFixture<Com3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Com3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Com3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
