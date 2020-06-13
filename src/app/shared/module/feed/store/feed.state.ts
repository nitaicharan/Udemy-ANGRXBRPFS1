import { BackendErrors } from 'src/app/shared/model/backend-errors.model';
import { FeedResponse } from '../models/feed-response.model';

export interface FeedState {
  isLoading: boolean;
  error: BackendErrors;
  data: FeedResponse;
}
