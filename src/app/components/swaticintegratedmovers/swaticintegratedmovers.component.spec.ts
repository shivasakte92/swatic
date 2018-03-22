import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaticintegratedmoversComponent } from './swaticintegratedmovers.component';

describe('SwaticintegratedmoversComponent', () => {
  let component: SwaticintegratedmoversComponent;
  let fixture: ComponentFixture<SwaticintegratedmoversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaticintegratedmoversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaticintegratedmoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
