import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaticresourcesComponent } from './swaticresources.component';

describe('SwaticresourcesComponent', () => {
  let component: SwaticresourcesComponent;
  let fixture: ComponentFixture<SwaticresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaticresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaticresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
