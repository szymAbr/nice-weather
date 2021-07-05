import { SET_POSITION } from "./positionTypes";

const initialState = {
  position: [],
};

interface PositionState {
  position: number[];
}

export default function positionReducer(
  state: PositionState = initialState,
  action: any
) {
  switch (action.type) {
    case SET_POSITION:
      return {
        position: action.payload,
      };
    default:
      return state;
  }
}
