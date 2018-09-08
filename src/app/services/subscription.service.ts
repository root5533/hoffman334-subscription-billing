import { Injectable } from '@angular/core';
import { Plan } from '../classes/Plan';
import { SupportTypes } from '../classes/support-types';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  support_type: Plan;
  support_emp_count: Number;
  Support: Plan[];
  support_types = SupportTypes;
  support_tax: number;

  constructor() {

    this.support_type = SupportTypes[0];
    this.support_emp_count = 0;
    this.support_tax = 99;

  }

  get getSupportTypes(): Plan[] {
    return this.support_types;
  }

  getSupportValue(): number {
    let value = -1;
    this.support_types.forEach(item => {
      if (item.name === this.support_type.name) {
        value = item.value;
      }
    });
    return value;
  }

}
