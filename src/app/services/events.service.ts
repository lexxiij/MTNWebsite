// events.service.ts
// Fetches events from the mtnConnect backend API.
// The mtn-website reads from the same database that admin creates events in.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ApiEvent {
  _id: string;
  title: string;
  date: string;        // "YYYY-MM-DD"
  time: string;        // "HH:MM" 24-hour, may be empty
  description: string;
  location: string;
  trainingType: string;
  registrationDeadline: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<ApiEvent[]> {
    // This hits the public GET /api/events route — no login needed
    return this.http.get<ApiEvent[]>(`${environment.apiUrl}/api/events`);
  }
}
