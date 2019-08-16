import {
  fetchShowsFailure,
  fetchShowsSuccess,
  fetchShowsRequest
} from './actions';

import { search, show } from '../api';

export const searchMiddleware = store => next => action => {
  //console.log(action);
  if (action.type === fetchShowsRequest.toString()) {
    const queryParams = action.payload;

    const shows = [1, 2, 3];
    store.dispatch(fetchShowsSuccess(shows));

    // try {
    //   // const shows = await search(queryParams);
    //   const shows = [1, 2, 3];
    //   console.log(shows);

    //   store.dispatch(fetchShowsSuccess(shows));
    // } catch (error) {
    //   store.dispatch(fetchShowsFailure(error));
    // }
  }
  return next(action);
};
