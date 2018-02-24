import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Answer} from "./answer.model";
import {Question} from "../question/question.model";
import {User} from "../auth/user.model";
import {QuestionService} from "../question/question.service";
import SweetScroll from 'sweet-scroll';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() question: Question;
  constructor(private questionService: QuestionService,
              private authService: AuthService, private router: Router) {

  }

  ngOnInit() {

  }
  onSubmit(form: NgForm) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/signin');
    }
    console.log(form.value.description);
    const answer = new Answer(form.value.description,
      this.question);
    // unshift coloca el valor el primer elemento de la lista
    this.questionService.addAnswer(answer).subscribe(
      a => {
        this.question.answers.unshift(a);
      },
      this.authService.handleError
    );
    form.reset();
  }

}
