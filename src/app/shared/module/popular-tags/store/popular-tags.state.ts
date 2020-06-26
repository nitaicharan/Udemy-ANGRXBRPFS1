import { Tag } from 'src/app/shared/model/tag.model';

export interface PopularTagsState {
  data: Tag[];
  isLoading: boolean;
  error: string;
}
