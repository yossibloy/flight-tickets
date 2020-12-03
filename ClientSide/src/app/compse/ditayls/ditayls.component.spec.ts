import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DitaylsComponent } from './ditayls.component';

describe('DitaylsComponent', () => {
  let component: DitaylsComponent;
  let fixture: ComponentFixture<DitaylsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DitaylsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DitaylsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
