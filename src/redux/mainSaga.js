import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth18996Saga from '../features/EmailAuth18996/redux/sagas';
import CalendarView28995Saga from '../features/CalendarView28995/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth18996Saga,
CalendarView28995Saga,
    
  ]);
}