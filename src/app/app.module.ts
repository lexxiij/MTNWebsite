// app.module.ts — This is the "master list" of everything your app knows about.
// Every component you create MUST be declared here so Angular can use it.

import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }         from '@angular/forms';
import { AppRoutingModule }    from './app-routing.module';

// Root component
import { AppComponent } from './app.component';

// Shared components
import { NavbarComponent } from './components/navbar/navbar.component';

// Page components (one per route/page)
import { HomeComponent }     from './pages/home/home.component';
import { AboutComponent }    from './pages/about/about.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { EventsComponent }   from './pages/events/events.component';
import { ImpactComponent }   from './pages/impact/impact.component';
import { ContactComponent }  from './pages/contact/contact.component';
import { StaffComponent }    from './pages/staff/staff.component';
import { DonorsComponent }   from './pages/donors/donors.component';
import { DonateComponent }   from './pages/donate/donate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProgramsComponent,
    EventsComponent,
    ImpactComponent,
    ContactComponent,
    StaffComponent,
    DonorsComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,   // <-- needed for HTTP calls (donate → backend)
    FormsModule,        // <-- needed for [(ngModel)] in donate form
    AppRoutingModule    // <-- brings in our routes
  ],
  providers: [],
  bootstrap: [AppComponent]  // <-- AppComponent is the first thing Angular loads
})
export class AppModule { }
