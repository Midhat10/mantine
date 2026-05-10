import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './TodoThunk';

export type Todo = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  count: number;
};

type TodoState = {
  todoList: Todo[];
  todoListSmall: Todo[];
  status: string;
  error: string | null | undefined;
};

const initialState: TodoState = {
  todoList: [],
  todoListSmall: [],
  status: '',
  error: '',
};

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    increment(state, action) {
      if (action.payload.regim === 1) {
        const todo = state.todoList.find((todo) => todo.id === action.payload.id)!;
        todo.count++;
      } else if (action.payload.regim === 2) {
        const todo = state.todoListSmall.find((todo) => todo.id === action.payload.id)!;
        todo.count++;
      }
    },
    decrement(state, action) {
      if (action.payload.regim === 1) {
        const todo = state.todoList.find((todo) => todo.id === action.payload.id)!;
        if (todo.count > 1) {
          if (todo.count > 1) {
            todo.count--;
          }
        }
      } else if (action.payload.regim === 2) {
        const todo = state.todoListSmall.find((todo) => todo.id === action.payload.id)!;
        if (todo.count > 1) {
          todo.count--;
        }
      }
    },
    addCard(state, action) {
      const todoSmall = state.todoListSmall.find((todo) => todo.id === action.payload.id);
      if (todoSmall) {
        todoSmall.count += action.payload.item.count;
      } else {
        state.todoListSmall.push(action.payload.item);
      }
      const todo = state.todoList.find((todo) => todo.id === action.payload.id)!;
      todo.count = 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.todoList = action.payload;
        state.todoList = state.todoList.map((todo) => ({ ...todo, count: 1 }));
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'rejected';
      });
  },
});

export const { increment, decrement, addCard } = TodoSlice.actions;
export default TodoSlice.reducer;
