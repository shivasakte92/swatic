import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaticwarehouseComponent } from './swaticwarehouse.component';

describe('SwaticwarehouseComponent', () => {
  let component: SwaticwarehouseComponent;
  let fixture: ComponentFixture<SwaticwarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaticwarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaticwarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
