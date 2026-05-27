// donate.component.ts
// Handles the donation flow:
//   1. User picks or types an amount
//   2. We POST to our backend which creates a Stripe Checkout session
//   3. We redirect the browser to the Stripe-hosted payment page
//   4. Stripe redirects back here with ?status=success or ?status=cancel

import { Component, OnInit } from '@angular/core';
import { HttpClient }         from '@angular/common/http';
import { ActivatedRoute }     from '@angular/router';
import { environment }        from '../../../environments/environment';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  // Preset dollar amounts shown as quick-select buttons
  presetAmounts = [10, 25, 50, 100, 250];

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

  selectedAmount: number | null = null;  // which preset is highlighted
  customAmount   = '';                   // value typed in the custom field
  loading        = false;
  errorMsg       = '';

  // Set by Stripe's redirect query params
  status: 'success' | 'cancel' | null = null;

  constructor(
    private http:  HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Check if Stripe redirected back here after payment
    // ?status=success → show thank-you  |  ?status=cancel → show cancelled message
    this.route.queryParams.subscribe(params => {
      if (params['status'] === 'success') this.status = 'success';
      if (params['status'] === 'cancel')  this.status = 'cancel';
    });
  }

  // Called when a preset button is clicked
  selectPreset(amount: number): void {
    this.selectedAmount = amount;
    this.customAmount   = '';   // clear custom input when a preset is chosen
    this.errorMsg       = '';
  }

  // Returns the final amount to charge:
  // custom input takes priority if filled in, otherwise use the preset
  get finalAmount(): number {
    const custom = parseFloat(this.customAmount);
    if (!isNaN(custom) && custom > 0) return custom;
    return this.selectedAmount ?? 0;
  }

  donate(): void {
    this.errorMsg = '';

    if (this.finalAmount < 1) {
      this.errorMsg = 'Please select or enter a donation amount (minimum $1).';
      return;
    }

    this.loading = true;

    // POST to our backend — it returns a Stripe Checkout URL
    this.http.post<{ url: string }>(
      `${environment.apiUrl}/api/donations/create-checkout-session`,
      { amount: this.finalAmount }
    ).subscribe({
      next: (res) => {
        // Redirect the browser to Stripe's hosted checkout page
        window.location.href = res.url;
      },
      error: (err) => {
        this.loading  = false;
        this.errorMsg = err.error?.message || 'Something went wrong. Please try again.';
      }
    });
  }

  resetStatus(): void {
    this.status = null;
  }
}
