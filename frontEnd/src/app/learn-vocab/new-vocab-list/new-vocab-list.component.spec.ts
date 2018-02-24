import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVocabListComponent } from './new-vocab-list.component';

describe('NewVocabListComponent', () => {
  let component: NewVocabListComponent;
  let fixture: ComponentFixture<NewVocabListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVocabListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVocabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
