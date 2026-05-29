// events.service.ts
// Fetches events from the mtnConnect backend API.
// The mtn-website reads from the same database that admin creates events in.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, delay } from 'rxjs/operators';
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
    // retry(2) means: if the request fails, wait and try up to 2 more times.
    // This handles Render's free-tier cold start (server asleep, wakes in ~30s).
    return this.http.get<ApiEvent[]>(`${environment.apiUrl}/api/events`).pipe(
      retry({ count: 3, delay: 10000 })  // retry 3 times, 10 seconds apart (handles Render cold start)
    );
  }
}
