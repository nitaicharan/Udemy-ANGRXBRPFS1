import { Profile } from './profile.model';

export interface Article {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
}
