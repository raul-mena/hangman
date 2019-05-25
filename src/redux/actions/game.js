import {
  GET_GAME,
  NEW_GAME,
  PUSH_LETTER_TO_FIND,
  WIN_GAME,
  LOSE_GAME,
  RESET_GAME
} from '../actions/types';

export const getGame = () => {
  return {
    type: GET_GAME
  }
}

export const setNewGame = (payload) => {
  return {
    type: NEW_GAME,
    payload
  }
}

export const pushLetter = (payload) => {
  return {
    type: PUSH_LETTER_TO_FIND,
    payload
  }
}

export const winGame = (payload) => {
  return {
    type: WIN_GAME,
    payload
  }
}

export const loseGame = (payload) => {
  return {
    type: LOSE_GAME,
    payload
  }
}


export const resetGame = () => {
  return {
    type: RESET_GAME
  }
}
