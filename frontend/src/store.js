import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./slices/albumSlice";
import rootSaga from "./sagas/albumSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
