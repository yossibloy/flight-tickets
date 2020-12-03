import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlitsecomComponent } from './flitsecom.component';

describe('FlitsecomComponent', () => {
  let component: FlitsecomComponent;
  let fixture: ComponentFixture<FlitsecomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlitsecomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlitsecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
