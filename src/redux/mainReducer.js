import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth18996Reducer from '../features/EmailAuth18996/redux/reducers';
import CalendarView28995Reducer from '../features/CalendarView28995/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth18996: EmailAuth18996Reducer,
CalendarView28995: CalendarView28995Reducer,

});