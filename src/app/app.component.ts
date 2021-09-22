import { Component } from '@angular/core';
import { MenuDataMock } from './mocks/menu-data.mock';
import { MenuDataModel } from './models/menu-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wagyu-burguers';

  public cardMenuConfig: MenuDataModel[] = MenuDataMock.getMenu();

}
