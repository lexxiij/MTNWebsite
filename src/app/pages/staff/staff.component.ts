import { Component } from '@angular/core';

// Interface must come BEFORE the @Component decorator —
// placing it after causes Angular to attach the decorator to the interface
// instead of the class, which breaks the build.
interface StaffMember {
  name: string;
  title: string;
  bio: string;
  icon: string;
  contact: string;
  photo?: string; // optional — shows photo instead of icon when set
}

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  staffMembers: StaffMember[] = [
    {
      name: 'Pamela Jones',
      title: 'Executive Director & Founder',
      bio: 'Mrs. Pamela Jones is the founder and Executive Director of MTN, Inc. She is a Charleston, MO native. Mrs. Jones graduated with her B.S. degree in Business Administration from Hannibal LeGrange University. Mrs. Pam is an entrepreneur and has worked with non-profit organizations for twenty-five years helping to improve the lives of others.',
      icon: 'fas fa-user-tie',
      photo: 'assets/photos/meetthestaff.jpg',
      contact: '573-233-2980'
    }
    // Add more staff members here as the organization grows!
  ];
}
