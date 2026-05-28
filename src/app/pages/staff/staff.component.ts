import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
// Defining the type here lets Angular's compiler know photo is optional (?)
// without it you get a build error when the template references member.photo
interface StaffMember {
  name: string;
  title: string;
  bio: string;
  icon: string;
  contact: string;
  photo?: string; // optional — if set, shows the photo instead of the icon
}

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
