import { Component } from '@angular/core';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent {
  donors = [
    'Missouri Department of Economic Development (DED)',
    'Missouri Department of Higher Education Workforce Development (DHEWD)',
    'DRPAM J Transport, LLC',
    'Ameren Corporation Charitable Trust',
    'FOCUS Bank',
    'Citizens Bank',
    'Mike & Jean Mueller',
    'Michael & Jannett Wilderness',
    'Industrial Development Authority (IDA)',
    'James L. Byrd, III Trust Estate',
    'Hudson Byrd',
    'First State Community Bank',
    'John Gary',
    'Anonymous Donors'
  ];
}
