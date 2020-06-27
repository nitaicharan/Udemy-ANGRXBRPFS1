import { Component, Input } from '@angular/core';
import { Tag } from 'src/app/shared/model/tag.model';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent {
  @Input() tags: Tag[];
}
