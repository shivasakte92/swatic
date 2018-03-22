import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyarikatuniversalComponent } from './syarikatuniversal.component';

describe('SyarikatuniversalComponent', () => {
  let component: SyarikatuniversalComponent;
  let fixture: ComponentFixture<SyarikatuniversalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyarikatuniversalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyarikatuniversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
