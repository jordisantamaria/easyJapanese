import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnVocabComponent } from './learn-vocab.component';

describe('LearnVocabComponent', () => {
  let component: LearnVocabComponent;
  let fixture: ComponentFixture<LearnVocabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnVocabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnVocabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
