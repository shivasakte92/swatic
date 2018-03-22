import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaticsdnbhdComponent } from './swaticsdnbhd.component';

describe('SwaticsdnbhdComponent', () => {
  let component: SwaticsdnbhdComponent;
  let fixture: ComponentFixture<SwaticsdnbhdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaticsdnbhdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaticsdnbhdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
