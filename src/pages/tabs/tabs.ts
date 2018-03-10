import {Component} from '@angular/core';
import {SessionsListPage} from '../session/sessions-list/sessions-list';
import {InfoPage} from '../timer/timer';
import {ExercisesListPage} from '../exercise/exercises-list/exercises-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SessionsListPage;
  tab2Root = ExercisesListPage;
  tab3Root = InfoPage;

  constructor() {

  }
}
