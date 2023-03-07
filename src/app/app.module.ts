import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudyCardsComponent } from './study-cards/study-cards.component';
import { NgxFlipCardModule } from 'ngx-flip-card';

@NgModule({
  declarations: [
    AppComponent,
    StudyCardsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxFlipCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
