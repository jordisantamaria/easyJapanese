import {Component, Input, OnInit} from '@angular/core';
import {VocabItem} from "../../models/vocabItem";

@Component({
  selector: 'app-vocab-list-content',
  templateUrl: './vocab-list-content.component.html',
  styleUrls: ['./vocab-list-content.component.css']
})
export class VocabListContentComponent implements OnInit {

  vocabItems: VocabItem[];
  constructor() {
    this.vocabItems = new Array<VocabItem>();
  }

  ngOnInit() {
  }

}
