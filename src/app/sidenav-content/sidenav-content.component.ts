import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from '../models/models';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss']
})
export class SidenavContentComponent implements OnInit {
  @Input() articles: IArticle[];

  constructor() {}

  ngOnInit() {}
}
