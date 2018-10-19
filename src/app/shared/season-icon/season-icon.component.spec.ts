import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonIconComponent } from './season-icon.component';

describe('SeasonIconComponent', () => {
  let component: SeasonIconComponent;
  let fixture: ComponentFixture<SeasonIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
