import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../question.model";
import {QuestionService} from "../question.service";

const q = new Question('¿Como reutilizo un componente en android?',
  'Miren, esta es mi pregunta...', new Date(), 'none');

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  loading = true;
  questions: Question[];
  @Input() sort = '-createdAt';
  constructor( private  questionService: QuestionService) { }

  ngOnInit() {
    this.questionService
      .getQuestions(this.sort)
      .then((questions: Question[]) => {
        this.questions = questions;
        this.loading = false;
      });
  }

}
