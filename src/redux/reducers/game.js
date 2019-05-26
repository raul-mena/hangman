import {
  GET_GAME,
  PUSH_LETTER_TO_FIND,
  NEW_GAME,
  WIN_GAME,
  LOSE_GAME
} from '../actions/types';

// set initial state;
const initialState = {
  word: [],
  letterFound: [],
  failed: 0,
  losers: 0,
  wins: 0,
  level: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAME:
      return {
        ...state
      }
    case NEW_GAME:
    //set store params to start the game
        return {
          ...state,
          word: action.payload.word,
          letterFound: action.payload.letterFound,
          level: action.payload.level
        }
    case PUSH_LETTER_TO_FIND:
    //i some letter is found, it will be displayed
        return {
          ...state,
          letterFound: action.payload.letterFound,
          failed: action.payload.failed
        }
    case WIN_GAME:
        //if win the game, wins state is updated
        return {
          ...state,
          wins: action.payload.wins,
          failed: 0,
          word: [],
          letterFound: [],
        }
    case LOSE_GAME:
    //if lose the game, losers state is updated
        return {
          ...state,
          losers: action.payload.losers,
          failed: 0,
          word: [],
          letterFound: [],
        }
    default:
    //default reset the game
      return {
        ...state,
        word: [],
        letterFound: [],
        failed: 0,
        losers: 0,
        wins: 0,
      }
  }
}
