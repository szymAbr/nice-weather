import { SET_SEARCH_HISTORY } from "./historyTypes";

const initialState = {
  history: [],
};

interface HistoryState {
  history: string[];
}

export default function historyReducer(
  state: HistoryState = initialState,
  action: any
) {
  switch (action.type) {
    case SET_SEARCH_HISTORY:
      return {
        history: action.payload,
      };
    default:
      return state;
  }
}
