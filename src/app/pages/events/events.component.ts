import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  // Add upcoming events here. Set registerLink to a URL or leave as ''
  // if there's no registration link yet.
  upcomingEvents = [
    {
      month: 'JUN',
      day: '8',
      title: 'Shipyard Welding Orientation',
      time: '1:00 PM – 3:00 PM',
      location: '700 W. Marshall St., Charleston, MO',
      description: 'Orientation for the upcoming Shipyard Welding cohort. Please bring a Photo ID, Social Security Card, and Birth Certificate.',
      registerLink: 'https://connect.meettheneedinc.org/shipyard-welding'
    }
  ];

  // Add flyers here as they become available.
  // thumb: path to a preview image (optional)
  // file:  path to the downloadable PDF or image
  flyers: { title: string; date: string; thumb: string; file: string }[] = [];
}
