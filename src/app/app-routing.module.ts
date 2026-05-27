// app-routing.module.ts — This tells Angular WHICH component to show
// based on the URL in the browser. Think of it like road signs:
// /about → show the About page, /programs → show Programs, etc.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }     from './pages/home/home.component';
import { AboutComponent }    from './pages/about/about.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { EventsComponent }   from './pages/events/events.component';
import { ImpactComponent }   from './pages/impact/impact.component';
import { ContactComponent }  from './pages/contact/contact.component';
import { StaffComponent }    from './pages/staff/staff.component';
import { DonorsComponent }   from './pages/donors/donors.component';
import { DonateComponent }   from './pages/donate/donate.component';

// Each object in this array = one URL route
const routes: Routes = [
  { path: '',          component: HomeComponent },      // www.mtn.org/
  { path: 'about',     component: AboutComponent },     // www.mtn.org/about
  { path: 'programs',  component: ProgramsComponent },  // www.mtn.org/programs
  { path: 'events',    component: EventsComponent },    // www.mtn.org/events
  { path: 'impact',    component: ImpactComponent },    // www.mtn.org/impact
  { path: 'contact',   component: ContactComponent },   // www.mtn.org/contact
  { path: 'staff',     component: StaffComponent },     // www.mtn.org/staff
  { path: 'donors',    component: DonorsComponent },    // www.mtn.org/donors
  { path: 'donate',   component: DonateComponent },    // www.mtn.org/donate
  { path: '**',        redirectTo: '' }                 // Any unknown URL → Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top' // Scroll to top on every page change
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
