import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ExercisesListPage} from '../pages/exercise/exercises-list/exercises-list';
import {SessionsListPage} from '../pages/session/sessions-list/sessions-list';
import {InfoPage} from '../pages/info/info';
import {SessionDetailPage} from '../pages/session/session-detail/session-detail';
import {DataProvider} from '../providers/data/data';
import {IonicStorageModule} from '@ionic/storage';
import {AddExercisePage} from '../pages/add-exercise/add-exercise'
import {ComponentsModule} from "../components/components.module";
import {AppVersion} from "@ionic-native/app-version";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    SessionsListPage,
    ExercisesListPage,
    InfoPage,
    SessionDetailPage,
    AddExercisePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
    }),
    IonicStorageModule.forRoot(),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    SessionsListPage,
    ExercisesListPage,
    InfoPage,
    SessionDetailPage,
    AddExercisePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    AppVersion
  ]
})
export class AppModule {
}
