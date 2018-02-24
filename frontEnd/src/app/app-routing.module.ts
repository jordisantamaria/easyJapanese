import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LearnVocabComponent} from "./learn-vocab/learn-vocab.component";


const appRoutes: Routes = [
  { path: 'learnVocab', component: LearnVocabComponent},
  { path: '', pathMatch: 'full', redirectTo: "/learnVocab"},


]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
