import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss']
})
export class TagFeedComponent {
  name: string;
  url = '/articles';

  constructor(public routerAction: ActivatedRoute) {
    this.name = this.routerAction.snapshot.params.slug;
    this.url += `?tag=${this.name}`;
  }
}
