import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.css']
})
export class ImpactComponent implements OnInit, OnDestroy {
  stats = [
    { number: '2020', label: 'Year Founded', icon: 'fas fa-calendar' },
    { number: '12', label: 'Counties Served', icon: 'fas fa-map' },
    { number: '$2.5M', label: 'ARPA Grant Awarded', icon: 'fas fa-dollar-sign' },
    { number: '3', label: 'Training Programs', icon: 'fas fa-graduation-cap' }
  ];

  // Community highlight cards shown in the highlights section
  communityHighlights = [
    {
      title: 'Shop With a Cop',
      description: 'Captain Ben Jones & Sergeant Jason Pace of Missouri State Highway Patrol posed with students at our Shop With a Cop event — a special day for our youth.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'County-Wide Christmas Toy Give-Away',
      description: 'Our volunteers and generous donors came together for a county-wide toy drive, bringing joy to children across the region during the holiday season.',
      icon: 'fas fa-gift'
    },
    {
      title: 'Make Every Day a Great Day',
      description: 'Social Media Influencer Donna Briggs of "Make Every Day a Great Day Foundation" visited with Charleston R-1 students and students from various school districts.',
      icon: 'fas fa-star'
    }
  ];

  // ── Slideshow ──
  // To add a new photo: drop the file in src/assets/photos/ and add a new
  // { src: 'assets/photos/yourfile.jpg', caption: 'Your caption' } entry below.
  galleryPhotos = [
    { src: 'assets/photos/comimpact.jpeg',       caption: 'MTN, Inc. in the Community' },
    { src: 'assets/photos/comimpact1.JPG',        caption: 'Community in Action' },
    { src: 'assets/photos/comimpact2.JPG',        caption: 'Community in Action' },
    { src: 'assets/photos/comimpact3.jpeg',       caption: 'Community in Action' },
    { src: 'assets/photos/comimpact5.jpg',        caption: 'Community in Action' },
    { src: 'assets/photos/comimpact6.jpg',        caption: 'Community in Action' },
    { src: 'assets/photos/comimpact8.jpeg',       caption: 'Community in Action' },
    { src: 'assets/photos/commimpact.JPG',        caption: 'Community in Action' },
    { src: 'assets/photos/comaction.jpg',         caption: 'MTN, Inc. in Action' },
    { src: 'assets/photos/impact9.jpg',           caption: 'Making an Impact' },
    { src: 'assets/photos/backpack-giveaway.jpg', caption: 'Backpack Giveaway' },
    { src: 'assets/photos/food-distribution.jpg', caption: 'Food Distribution' },
    { src: 'assets/photos/school-visit.jpg',      caption: 'School Visit' },
    { src: 'assets/photos/toy-giveaway-kids.jpg', caption: 'County-Wide Toy Giveaway' },
    { src: 'assets/photos/pumpkin-sale.jpg',      caption: 'Community Pumpkin Sale' },
    { src: 'assets/photos/law-enforcement.jpg',   caption: 'Community & Law Enforcement Partnership' },
  ];

  currentSlide = 0;
  private slideInterval: any;

  ngOnInit() { this.startAutoPlay(); }
  ngOnDestroy() { this.stopAutoPlay(); }

  startAutoPlay() {
    this.slideInterval = setInterval(() => this.nextSlide(), 4500);
  }

  stopAutoPlay() {
    if (this.slideInterval) clearInterval(this.slideInterval);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.galleryPhotos.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.galleryPhotos.length) % this.galleryPhotos.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  supporters = [
    'Donna Briggs — "Make Every Day a Great Day Foundation"',
    'Missouri State Highway Patrol',
    'DRPAM J TRANSPORT, LLC',
    'FOCUS Bank',
    'Mississippi County Sheriffs Office',
    'Charleston Police Department',
    'Agent Travis Phillips, MO Dept. of Conservation',
    'Ava Patterson & Adelyn Childers, East Prairie R-2 School District',
    'The Simpsons (Lego & Family)',
    'Joan Feezor',
    'Mr. Preston Moore',
    'Mrs. Debbie Turner',
    'Danitra Jones-Dyes',
    'Byron Jones',
    'MTN, Inc. Board of Directors'
  ];
}
