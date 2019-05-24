import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as Parser from "rss-parser";
import thunk from "redux-thunk";

const exampleInitialState = {
  jobs: []
};

export const actionTypes = {
  JOBS: "JOBS"
};

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.JOBS:
      return Object.assign({}, state, {
        jobs: action.jobs
      });
    default:
      return state;
  }
};

// ACTIONS
export const getJobs = () => {
  return dispatch => {
    let parser = new Parser();
    return parser
      .parseURL(
        CORS_PROXY +
          "https://weworkremotely.com/categories/remote-customer-support-jobs.rss"
      )
      .then(feed => {
        console.log(feed);
        dispatch({ type: actionTypes.JOBS, jobs: feed.items });
      });
  };
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
