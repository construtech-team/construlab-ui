import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrulabUiComponent } from './construlab-ui.component';

describe('ConstrulabUiComponent', () => {
  let component: ConstrulabUiComponent;
  let fixture: ComponentFixture<ConstrulabUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstrulabUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstrulabUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
