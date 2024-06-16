import { stateFormBase } from "../types/forms";
import { ActionsForm } from "../types/forms";

export type ActionReducer<T> =
  | { type: ActionsForm.FETCH_FIELDS; payload: T }
  | { type: ActionsForm.FETCH_ERRORS; payload: T }
  | {
      type: ActionsForm.FETCH_PROCESS;
      payload: { loading: boolean; validate: boolean,finish:boolean };
    };

function buildReducer<T>(initialState: stateFormBase<T>) {
  const reducer = (state = initialState, action: ActionReducer<T>) => {
    switch (action.type) {
      case ActionsForm.FETCH_FIELDS:
        return { ...state, fields: action.payload };
      case ActionsForm.FETCH_ERRORS:
        return { ...state, errors: action.payload };
      case ActionsForm.FETCH_PROCESS:
        return { ...state, process: action.payload };
      default:
        return state;
    }
  };

  return reducer;
}

export default buildReducer;
