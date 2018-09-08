import { Injectable } from '@angular/core';
import { Plan } from '../classes/Plan';
import { SupportTypes } from '../classes/support-types';
import { GuideTypes } from '../classes/guide-types';
import { ChatTypes } from '../classes/chat-types';
import { TalkTypes } from '../classes/talk-types';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  support_type: Plan;
  support_emp_count: Number;
  Support: Plan[];
  support_types = SupportTypes;
  support_tax: number;

  guide_type: Plan;
  guide_emp_count: Number;
  guide: Plan[];
  guide_types = GuideTypes;
  guide_tax: number;

  chat_type: Plan;
  chat_emp_count: Number;
  chat: Plan[];
  chat_types = ChatTypes;
  chat_tax: number;

  talk_type: Plan;
  talk_emp_count: Number;
  talk: Plan[];
  talk_types = TalkTypes;
  talk_tax: number;

  constructor() {

    this.support_type = SupportTypes[0];
    this.support_emp_count = 0;
    this.support_tax = 99;

    this.guide_type = GuideTypes[0];
    this.guide_emp_count = 0;
    this.guide_tax = 49;

    this.chat_type = ChatTypes[0];
    this.chat_emp_count = 0;
    this.chat_tax = 49;

    this.talk_type = TalkTypes[0];
    this.talk_emp_count = 0;
    this.talk_tax = 49;

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

  get getGuideTypes(): Plan[] {
    return this.guide_types;
  }

  getGuideValue(): number {
    let value = -1;
    this.guide_types.forEach(item => {
      if (item.name === this.guide_type.name) {
        value = item.value;
      }
    });
    return value;
  }

  get getChatTypes(): Plan[] {
    return this.chat_types;
  }

  getChatValue(): number {
    let value = -1;
    this.chat_types.forEach(item => {
      if (item.name === this.chat_type.name) {
        value = item.value;
      }
    });
    return value;
  }

  get getTalkTypes(): Plan[] {
    return this.talk_types;
  }

  getTalkValue(): number {
    let value = -1;
    this.talk_types.forEach(item => {
      if (item.name === this.talk_type.name) {
        value = item.value;
      }
    });
    return value;
  }

  getTaxTotal(): number {
    const amount = this.support_tax + this.guide_tax + this.chat_tax + this.talk_tax;
    return amount;
  }

}
