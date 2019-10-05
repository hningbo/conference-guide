import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceBlockComponent } from './conference-block.component';

describe('ConferenceBlockComponent', () => {
  let component: ConferenceBlockComponent;
  let fixture: ComponentFixture<ConferenceBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
