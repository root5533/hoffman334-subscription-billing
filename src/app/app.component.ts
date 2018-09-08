import { Component } from '@angular/core';
import { SubscriptionService } from './services/subscription.service';
import { Plan } from './classes/Plan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Subscription Choices';
  support: Plan[];
  support_value: number;
  support_count: number;

  constructor( private subService: SubscriptionService ) {

    this.support = this.subService.getSupportTypes;
    this.support_value = this.subService.getSupportValue();
    this.support_count = 0;

  }

  updateValues() {
    this.support_value = this.subService.getSupportValue();
  }

}
