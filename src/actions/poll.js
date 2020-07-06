import api from '../utils/api';
import { setAlert } from './alert';
import {
  GET_POLLS,
  POLL_ERROR,
  UPDATE_VOTE,
  DELETE_POLL,
  ADD_POLL,
  GET_POLL,
  CLOSE_POLL,
} from '../actions/types';

// Get polls
export const getPolls = () => async (dispatch) => {
  try {
    const res = await api.get('/polls');

    dispatch({
      type: GET_POLLS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POLL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add like
export const addVote = (id) => async (dispatch) => {
  try {
    const res = await api.put(`/polls/vote/${id}`);

    dispatch({
      type: UPDATE_VOTE,
      payload: { id: res.data._id, choices: res.data.choices },
    });
  } catch (err) {
    dispatch({
      type: POLL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
