import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisLaborComponent } from './vis-labor.component';

describe('VisLaborComponent', () => {
  let component: VisLaborComponent;
  let fixture: ComponentFixture<VisLaborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisLaborComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
