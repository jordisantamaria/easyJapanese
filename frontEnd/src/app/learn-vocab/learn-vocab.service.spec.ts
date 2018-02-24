import { TestBed, inject } from '@angular/core/testing';

import { LearnVocabService } from './learn-vocab.service';

describe('LearnVocabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LearnVocabService]
    });
  });

  it('should be created', inject([LearnVocabService], (service: LearnVocabService) => {
    expect(service).toBeTruthy();
  }));
});
