import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyCardsComponent } from './study-cards/study-cards.component';

const routes: Routes = [
  { path: '', component: StudyCardsComponent, pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
