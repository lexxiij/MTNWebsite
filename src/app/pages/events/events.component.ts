import { Component, OnInit } from '@angular/core';
import { EventsService, ApiEvent } from '../../services/events.service';

// This is the shape the HTML template expects for each event row
interface DisplayEvent {
  month: string;
  day: string;
  title: string;
  time: string;
  location: string;
  description: string;
  registerLink: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  upcomingEvents: DisplayEvent[] = [];
  loading = true;
  error = false;
  errorMessage = '';

  // Flyers are still managed manually here (they're PDF assets, not from the DB)
  flyers: { title: string; date: string; thumb: string; file: string }[] = [
    {
      title: 'CDL & Forklift Training',
      date: 'Orientation: May 29, 2026',
      thumb: 'assets/WSTEP_Forklift_Flyer.png',
      file: 'assets/WSTEP_Forklift_Flyer.pdf',
    },
    {
      title: 'Shipyard Welding Training',
      date: 'Orientation: June 9, 2026',
      thumb: 'assets/WSTEP_Welding_Flyer.png',
      file: 'assets/WSTEP_Welding_Flyer.pdf',
    },
  ];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe({
      next: (events: ApiEvent[]) => {
        // Transform API data into what the template needs
        const today = new Date();
        today.setHours(0, 0, 0, 0); // compare by date only, not time

        this.upcomingEvents = events
          .filter(e => new Date(e.date + 'T00:00:00') >= today)
          .map(e => this.toDisplayEvent(e));
        this.loading = false;
      },
      error: (err) => {
        this.error = true;
        this.loading = false;
        this.errorMessage = `Status: ${err.status} — ${err.message}`;
      }
    });
  }

  private toDisplayEvent(e: ApiEvent): DisplayEvent {
    // Parse "YYYY-MM-DD" into a Date so we can extract month + day
    // Adding T00:00:00 prevents timezone shifting the date by a day
    const d = new Date(e.date + 'T00:00:00');
    const month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const day   = String(d.getDate());

    // Convert "HH:MM" (24h) to "H:MM AM/PM" for display
    const time = this.formatTime(e.time);

    return {
      month,
      day,
      title:        e.title,
      time,
      location:     e.location,
      description:  e.description,
      registerLink: 'https://connect.meettheneedinc.org/events'  // links to mtnConnect events page
    };
  }

  private formatTime(time: string): string {
    if (!time) return '';
    const [hourStr, minStr] = time.split(':');
    let hour = parseInt(hourStr, 10);
    const min  = minStr || '00';
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${hour}:${min} ${ampm}`;
  }
}
