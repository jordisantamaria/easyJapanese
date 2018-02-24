import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { environment } from '../../environments/environment';
import * as urljoin from 'url-join';
import 'rxjs/add/operator/toPromise';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {Answer} from "../answer/answer.model";


@Injectable()
export class QuestionService {

  private questionsUrl: string;

  constructor(private http: HttpClient) {
    this.questionsUrl = urljoin(environment.apiUrl, 'questions');
  }

  getQuestions(sort = '-createdAt'): Promise<void | Question[]> {
    return this.http.get(`${this.questionsUrl}?sort=${sort}`)
      .toPromise()
      .then(response => response as Question[])
      .catch(this.handleError);
  }

  getQuestion(id): Promise<void | Question> {
    const url = urljoin(this.questionsUrl, id);
    return this.http.get(url)
      .toPromise()
      .then(response => response as Question)
      .catch(this.handleError);
  }
  getToken(): string {
    const token = localStorage.getItem('token');
    return `?token=${token}`;

  }
  addQuestion(question: Question) {
    const body = JSON.stringify(question);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = this.questionsUrl + this.getToken();
    console.log('url addQuestion = ' + url);
    return this.http.post(url, body, { headers })
      .map( q => <Question>q);
  }
  addAnswer(answer: Answer) {
    const answerToAdd = {
      description: answer.description,
      question: {
        _id: answer.question._id
      }
    };
    const body = JSON.stringify(answerToAdd);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const token = this.getToken();
    const url = this.questionsUrl + '/' + answer.question._id + '/answers'
    return this.http.post(url + token, body, { headers })
      .map( a => <Answer>a);
  }
  handleError(error: any) {
    const errMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
  }
}
