import {Component} from '@angular/core';
import {SessionsListPage} from '../sessions-list/sessions-list';
import {TimerPage} from '../timer/timer';
import {ExercisesListPage} from '../exercises-list/exercises-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SessionsListPage;
  tab2Root = ExercisesListPage;
  tab3Root = TimerPage;

  constructor() {

  }
}
