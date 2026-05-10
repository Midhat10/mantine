import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerTodo from '../reducers/TodoSlice';

const rootReducer = combineReducers({
  reducerTodo,
});

const store = configureStore({
  reducer: {
    todos: rootReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
