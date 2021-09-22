import { Component, Input, OnInit } from '@angular/core';
import { MenuDataModel } from 'src/app/models/menu-data.model';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuComponent implements OnInit {

  @Input() cardMenuConfig: MenuDataModel = {};

  ngOnInit(): void {
  }

}
