import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracknextComponent } from './tracknext.component';

describe('TracknextComponent', () => {
  let component: TracknextComponent;
  let fixture: ComponentFixture<TracknextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracknextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracknextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
