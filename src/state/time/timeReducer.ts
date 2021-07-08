import { SET_TIME_PERIOD } from "./timeTypes";

const initialState = {
  time: 0,
};

interface TimeState {
  time: number;
}

export default function timeReducer(
  state: TimeState = initialState,
  action: any
) {
  switch (action.type) {
    case SET_TIME_PERIOD:
      return {
        time: action.payload,
      };
    default:
      return state;
  }
}
