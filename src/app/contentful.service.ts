import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../environments/environment';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  })

  constructor() { }

  logContent(contentId) {
    this.client.getEntry(contentId).then((entry) => console.log(entry))
  }

  getContent(contentId) {
    const promise = this.client.getEntry(contentId)
    return from(promise).pipe(map(entry => entry.fields))
  }

  getContentList() {
    const promise = this.client.getEntries()
    return from(promise).pipe(map(entry => entry.items.map(item => item.fields)))
  }
}
