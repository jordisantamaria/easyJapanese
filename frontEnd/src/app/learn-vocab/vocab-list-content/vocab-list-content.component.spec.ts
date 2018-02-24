import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabListContentComponent } from './vocab-list-content.component';

describe('VocabListContentComponent', () => {
  let component: VocabListContentComponent;
  let fixture: ComponentFixture<VocabListContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabListContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
