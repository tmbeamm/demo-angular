import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamInfoComponent } from './param-info.component';

describe('ParamInfoComponent', () => {
  let component: ParamInfoComponent;
  let fixture: ComponentFixture<ParamInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
