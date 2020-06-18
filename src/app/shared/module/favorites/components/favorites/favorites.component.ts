import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToFavoritesAction } from '../../store/actions/favorites.action';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorited: boolean;
  @Input() count: number;
  @Input() slug: string;

  _count: number;
  _isFavorited: boolean;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this._count = this.count;
    this._isFavorited = this.isFavorited;
  }

  handleLike(): void {
    this.store.dispatch(addToFavoritesAction({ isFavorited: this._isFavorited, slug: this.slug }));
    this._isFavorited ? this._count -= 1 : this._count += 1;
    this._isFavorited = !this._isFavorited;
  }
}
