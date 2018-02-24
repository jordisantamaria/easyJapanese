import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {VocabList} from "../../models/vocabList.model";
import {LearnVocabService} from "../learn-vocab.service";
import {VocabItem} from "../../models/vocabItem";

@Component({
  selector: 'app-new-vocab-list',
  templateUrl: './new-vocab-list.component.html',
  styleUrls: ['./new-vocab-list.component.css']
})
export class NewVocabListComponent implements OnInit {

  constructor(private learnVocabService: LearnVocabService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const {name, vocabItems } = form.value;
    const itemsLines = vocabItems.split('\n');
    const itemsArrays = itemsLines.map( (i) => i.split(';') );

    const items: VocabItem[] = new Array<VocabItem>();
    itemsArrays.forEach( (i) => {
      items.push(new VocabItem(i[0], i[1], i[2], i[3] || ''));
    })

    const list = new VocabList(name, items);
    console.log(`list = ${list.name} - ${JSON.stringify(list.vocabItems)}`);
    this.learnVocabService.addList(list);
  }

}
