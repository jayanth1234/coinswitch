import { applyMiddleware, createStore } from 'redux';
import promise from "redux-promise-middleware";

import reducer from "../reducers";

// const middleware = applyMiddleware(thunkMiddleware, promise(), createLogger() );

const middleware = [ promise ];
const store = createStore(reducer, applyMiddleware(...middleware));

export default store;

