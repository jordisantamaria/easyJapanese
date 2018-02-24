import { Component, OnInit } from '@angular/core';
import {VocabList} from "../models/vocabList.model";
import {LearnVocabService} from "./learn-vocab.service";

@Component({
  selector: 'app-learn-vocab',
  templateUrl: './learn-vocab.component.html',
  styleUrls: ['./learn-vocab.component.css']
})
export class LearnVocabComponent implements OnInit {

  vocabList: VocabList[];

  constructor(private learnVocabService: LearnVocabService) {
    this.vocabList = new Array<VocabList>();
    this.vocabList.push(new VocabList("prueba", []));
    this.vocabList.push(new VocabList("prueba2", []));
    this.learnVocabService.getLists().subscribe( (list) => {
      console.log('List = ' + list);
      this.vocabList = <VocabList[]>list;
    });
  }

  ngOnInit() {
  }



}
