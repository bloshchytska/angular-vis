import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleD3Component } from './simple-d3.component';

describe('SimpleD3Component', () => {
  let component: SimpleD3Component;
  let fixture: ComponentFixture<SimpleD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
