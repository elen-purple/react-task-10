import { combineReducers } from "redux";

const contactsInitialState = [];
const filterInitialState = "";

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case "tasks/deleteTask": {
      return state.filter(({ id }) => id !== action.payload);
    }
    case "tasks/addTask": {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case "filter/filterTasks": {
      return action.payload;
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
