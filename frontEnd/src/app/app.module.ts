import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material/material.module";
import 'hammerjs';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { MomentModule } from 'angular2-moment';
import { AnswerComponent } from './answer/answer-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SigninScreenComponent } from './auth/signin-screen/signin-screen.component';
import { SignupScreenComponent } from './auth/signup-screen/signup-screen.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionFormComponent } from './question/question-form/question-form.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {QuestionService} from "./question/question.service";
import {HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import { QuestionScreenComponent } from './question/question-screen/question-screen.component';
import {LearnVocabModule} from "./learn-vocab/learn-vocab.module";



@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerComponent,
    SigninScreenComponent,
    SignupScreenComponent,
    QuestionListComponent,
    QuestionFormComponent,
    QuestionScreenComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule, MomentModule,
    FormsModule, ReactiveFormsModule, HttpClientModule, LearnVocabModule,
    AppRoutingModule
  ],
  providers: [QuestionService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
