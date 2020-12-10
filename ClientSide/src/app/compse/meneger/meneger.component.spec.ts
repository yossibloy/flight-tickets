import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenegerComponent } from './meneger.component';

describe('MenegerComponent', () => {
  let component: MenegerComponent;
  let fixture: ComponentFixture<MenegerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenegerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
