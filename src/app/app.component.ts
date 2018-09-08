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

  guide: Plan[];
  guide_value: number;
  guide_count: number;

  chat: Plan[];
  chat_value: number;
  chat_count: number;

  talk: Plan[];
  talk_value: number;
  talk_count: number;

  billing_period: string;
  bill_mult: number;
  tax_total: number;

  constructor( private subService: SubscriptionService ) {

    this.support = this.subService.getSupportTypes;
    this.support_value = this.subService.getSupportValue();
    this.support_count = 0;

    this.guide = this.subService.getGuideTypes;
    this.guide_value = this.subService.getGuideValue();
    this.guide_count = 0;

    this.chat = this.subService.getChatTypes;
    this.chat_value = this.subService.getChatValue();
    this.chat_count = 0;

    this.talk = this.subService.getTalkTypes;
    this.talk_value = this.subService.getTalkValue();
    this.talk_count = 0;

    this.billing_period = 'month';
    this.bill_mult = 1;
    this.tax_total = this.subService.getTaxTotal() / 12;

  }

  updateValues() {
    this.support_value = this.subService.getSupportValue();
    this.guide_value = this.subService.getGuideValue();
    this.chat_value = this.subService.getChatValue();
    this.talk_value = this.subService.getTalkValue();
    if (this.billing_period === 'month') {
      this.bill_mult = 1;
      if (this.tax_total === this.subService.getTaxTotal()) {
        this.tax_total = this.subService.getTaxTotal() / 12;
      }
    } else {
      this.bill_mult = 12;
      if (this.tax_total !== this.subService.getTaxTotal()) {
        this.tax_total = this.subService.getTaxTotal();
      }
    }
  }

}
