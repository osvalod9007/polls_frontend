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
        polls: state.polls.map(
          (poll) =>
            poll._id === payload.id
              ? { ...poll, choices: payload.choices }
              : poll
          // poll.choices.map((choice) =>
          //   choice.votes.map((vote) =>
          //     vote._id === payload.id ? { ...poll, poll: payload.poll } : poll
          //   )
          // )
        ),
        loading: false,
      };
    default:
      return state;
  }
}
