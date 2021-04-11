import { FETCH_ALL, CREATE} from '../constants/actionTypes';

export default (videos = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...videos, action.payload];
  }
};