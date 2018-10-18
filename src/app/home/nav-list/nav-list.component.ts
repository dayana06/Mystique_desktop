import { Component, OnInit, Input } from '@angular/core';
import { MatListItem } from '@angular/material';

interface Lista {
  type: string;
  link?: string;
  label: string;
  icon: boolean;
  iconName?: string;
  group?: Lista[];
}

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {
 @Input() width = '300px';
 @Input() listas: Lista[];
  constructor() {
  }

  ngOnInit() {
  }


}
