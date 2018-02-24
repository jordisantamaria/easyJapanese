import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVocabItemComponent } from './new-vocab-item.component';

describe('NewVocabItemComponent', () => {
  let component: NewVocabItemComponent;
  let fixture: ComponentFixture<NewVocabItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVocabItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVocabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
