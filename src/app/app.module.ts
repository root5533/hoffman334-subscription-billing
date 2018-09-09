import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubscriptionService } from './services/subscription.service';
import { FormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { AppRoutingModule } from './/app-routing.module';
import { ChangeValueComponent } from './pages/change-value/change-value.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeValueComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UiSwitchModule,
    AppRoutingModule
  ],
  providers: [
    SubscriptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
