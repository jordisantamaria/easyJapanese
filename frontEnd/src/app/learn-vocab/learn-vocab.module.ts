import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnVocabComponent } from './learn-vocab.component';
import { VocabListContentComponent } from './vocab-list-content/vocab-list-content.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../material/material.module";
import { NewVocabListComponent } from './new-vocab-list/new-vocab-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LearnVocabRoutingModule} from "./learn-vocab-routing.module";
import { NewVocabItemComponent } from './new-vocab-item/new-vocab-item.component';
import {LearnVocabService} from "./learn-vocab.service";

@NgModule({
  imports: [
    CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, LearnVocabRoutingModule
  ],
  declarations: [LearnVocabComponent, VocabListContentComponent,
    NewVocabListComponent, NewVocabItemComponent],
  providers: [LearnVocabService]
})
export class LearnVocabModule { }
