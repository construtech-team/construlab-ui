import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsCardComponent } from './cons-card.component';

describe('ConsCardComponent', () => {
  let component: ConsCardComponent;
  let fixture: ComponentFixture<ConsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
