import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeValueComponent } from './pages/change-value/change-value.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';

const routes: Routes = [
  { path: '', component: SubscriptionComponent },
  { path: 'setValues',  component: ChangeValueComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
