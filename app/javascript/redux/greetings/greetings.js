const GREETING_REQUEST = 'hello_world/greetings/GREETING_REQUEST';
const GREETING_SUCCESS = 'hello_world/greetings/GREETING_SUCCESS';
const GREETING_FAILURE = 'hello_world/greetings/GREETING_FAILURE';

const initialState = {
  greeting: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GREETING_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GREETING_SUCCESS:
      return {
        ...state,
        loading: false,
        greeting: action.result,
      };
    case GREETING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function fetchGreeting() {
  return (dispatch) => {
    dispatch({ type: GREETING_REQUEST });

    return fetch('/api/random_message')
      .then(response => {
        return response.json()
      })
      .then(({ message }) => {
        dispatch({ type: GREETING_SUCCESS, result: message })
      })
      .catch(error => dispatch({ type: GREETING_FAILURE, error }));
  }
}
