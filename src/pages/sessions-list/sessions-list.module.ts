import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SessionsListPage } from './sessions-list';

@NgModule({
  declarations: [
    SessionsListPage,
  ],
  imports: [
    IonicPageModule.forChild(SessionsListPage),
  ],
})
export class SessionsListPageModule {}
