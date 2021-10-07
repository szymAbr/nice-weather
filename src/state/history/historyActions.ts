import { SET_SEARCH_HISTORY } from "./historyTypes";

type HistoryType = { type: string; payload: string[] };

export function setSearchHistory(history: string[]): HistoryType {
  return {
    type: SET_SEARCH_HISTORY,
    payload: history,
  };
}
