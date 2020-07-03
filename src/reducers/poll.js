import {
  GET_POLLS,
  POLL_ERROR,
  UPDATE_VOTE,
  DELETE_POLL,
  ADD_POLL,
  GET_POLL,
  CLOSE_POLL,
} from '../actions/types';

const initialState = {
  polls: [],
  poll: null,
  choices: [],
  choice: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POLLS:
      return {
        ...state,
        polls: payload,
        loading: false,
      };
    case POLL_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case UPDATE_VOTE:
      return {
        ...state,
        choices: state.choices.map((choice) =>
          choice._id === payload.id
            ? { ...choice, votes: payload.votes }
            : choice
        ),
        loading: false,
      };
    default:
      return state;
  }
}
