import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ExercisesListPage} from '../pages/exercises-list/exercises-list';
import {SessionsListPage} from '../pages/sessions-list/sessions-list';
import {TimerPage} from '../pages/timer/timer';
import {SessionDetailPage} from '../pages/session-detail/session-detail';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    SessionsListPage,
    ExercisesListPage,
    TimerPage,
    SessionDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    SessionsListPage,
    ExercisesListPage,
    TimerPage,
    SessionDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {
}
