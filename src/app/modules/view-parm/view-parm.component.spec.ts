import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParmComponent } from './view-parm.component';

describe('ViewParmComponent', () => {
  let component: ViewParmComponent;
  let fixture: ComponentFixture<ViewParmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewParmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewParmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
