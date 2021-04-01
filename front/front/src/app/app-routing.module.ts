import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BilleterieComponent } from './billeterie/billeterie.component';
import { ConcertComponent } from './concert/concert.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concert', component: ConcertComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'mentions_legales', component: MentionsLegalesComponent },
  { path: 'concerts', component: ConcertsComponent },
  { path: 'billeterie', component: BilleterieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
