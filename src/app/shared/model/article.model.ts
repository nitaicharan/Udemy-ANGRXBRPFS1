import { Profile } from './profile.model';
import { Tag } from './tag.model';

export interface Article {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: Tag[];
  description: string;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
}
