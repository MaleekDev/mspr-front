import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConcertComponent } from './concert/concert.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { BilleterieComponent } from './billeterie/billeterie.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { PostService } from './post.service';
import { AuthService } from './auth.service';
import { GuardGuard } from './guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    ConcertComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FaqComponent,
    MentionsLegalesComponent,
    BilleterieComponent,
    ConcertsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [AuthService, PostService, GuardGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
