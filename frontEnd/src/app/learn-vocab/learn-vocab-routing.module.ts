import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {VocabListContentComponent} from "./vocab-list-content/vocab-list-content.component";
import {NewVocabListComponent} from "./new-vocab-list/new-vocab-list.component";
import {NewVocabItemComponent} from "./new-vocab-item/new-vocab-item.component";

const APP_ROUTES: Routes = [
  { path: 'learnVocab/new', component: NewVocabListComponent},
  { path: 'learnVocab/:id', component: VocabListContentComponent},
  { path: 'learnVocab/:id/new', component: NewVocabItemComponent},


]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(APP_ROUTES)
  ],
  exports: [RouterModule],
  declarations: []
})
export class LearnVocabRoutingModule { }
