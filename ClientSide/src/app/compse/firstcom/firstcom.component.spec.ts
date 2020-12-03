import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcomComponent } from './firstcom.component';

describe('FirstcomComponent', () => {
  let component: FirstcomComponent;
  let fixture: ComponentFixture<FirstcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
