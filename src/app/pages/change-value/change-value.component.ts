import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';
import { Plan } from '../../classes/Plan';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-value',
  templateUrl: './change-value.component.html',
  styleUrls: ['./change-value.component.css']
})
export class ChangeValueComponent implements OnInit {

  support_types: Plan[];
  guide_types: Plan[];
  chat_types: Plan[];
  talk_types: Plan[];

  constructor( public subService: SubscriptionService, public toastr: ToastrService ) { }

  ngOnInit() {

    this.support_types = this.subService.getSupportTypes;
    this.guide_types = this.subService.getGuideTypes;
    this.chat_types = this.subService.getChatTypes;
    this.talk_types = this.subService.getTalkTypes;

  }

  updateSupply(item_name: string, event: any) {
    this.toastr.success('New value assigned for ' + item_name, 'Updated Supply!');
    this.subService.updateSubValues('supply', item_name, event);
  }

  updateGuide(item_name: string, event: any) {
    this.toastr.success('New value assigned for ' + item_name, 'Updated Guide!');
    this.subService.updateSubValues('guide', item_name, event);
  }

  updateChat(item_name: string, event: any) {
    this.toastr.success('New value assigned for ' + item_name, 'Updated Chat!');
    this.subService.updateSubValues('chat', item_name, event);
  }

  updateTalk(item_name: string, event: any) {
    this.toastr.success('New value assigned for ' + item_name, 'Updated Talk!');
    this.subService.updateSubValues('talk', item_name, event);
  }

}
