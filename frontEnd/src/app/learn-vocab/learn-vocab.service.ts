import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {VocabList} from "../models/vocabList.model";
import * as urljoin from 'url-join';
import {environment} from "../../environments/environment";

@Injectable()
export class LearnVocabService {

  url: String;
  constructor(private http: HttpClient) {
    this.url = urljoin(environment.apiUrl);

  }

  addList( vocabList: VocabList ) {
    const body = JSON.stringify(vocabList);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
     this.http.post( urljoin(this.url, 'vocabList'),
      body, {headers} ).subscribe();
  }
  getLists() {
    return this.http.get( urljoin(this.url, 'vocabList'));
  }

}
