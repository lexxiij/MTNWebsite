import { Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent {
  // Update this URL once mtnConnect is deployed
  registerUrl = 'https://connect.meettheneedinc.org';

  // This array powers the WSTEP training cards — a great example
  // of how Angular lets you store data in TypeScript and loop over
  // it in HTML using *ngFor
  trainings = [
    {
      icon: 'fas fa-forklift',
      title: 'Forklift Training',
      description: 'Hands-on forklift operation training using propane forklifts and state-of-the-art electric forklifts donated by Ameren Missouri.',
      requirements: ['18 years or older', 'Missouri resident (12-county region)', 'Meet WSTEP eligibility criteria']
    },
    {
      icon: 'fas fa-truck',
      title: 'Class A & B CDL Training',
      description: 'Commercial Driver\'s License training to open doors to careers in trucking and transportation.',
      requirements: [
        '18 years or older',
        'Pass drug screen',
        '7-year MVR report (within 30 days)',
        'Valid CDL permit (min. 14 days before exam)',
        'No Medical Marijuana License (MML)',
        'Missouri resident (12-county region)'
      ]
    },
    {
      icon: 'fas fa-tools',
      title: 'Shipyard Welding Training',
      description: 'Professional welding training to enter the high-demand maritime and manufacturing industries.',
      requirements: ['18 years or older', 'Missouri resident (12-county region)', 'Meet WSTEP eligibility criteria']
    }
  ];
}
