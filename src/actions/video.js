import { FETCH_ALL, CREATE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getVideos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchVideos();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createVideo = (video) => async (dispatch) => {
  try {
    const { data } = await api.createVideo(video);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};