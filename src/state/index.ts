import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import rootSaga from "./saga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleWare = createSagaMiddleware();

export default configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);
