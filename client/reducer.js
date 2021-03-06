import { RECEIVE_JOKES } from './actions/jokesaction'

const reducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_JOKES:
      return action.jokes

    default:
      return state
  }
}

export default reducer
