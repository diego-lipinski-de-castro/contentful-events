import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ContentfulService } from './../contentful.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  event$: Observable<any[]>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.event$ = this.contentful.getContentList()
  }

}
