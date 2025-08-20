import { type TodosState, type TodosAction } from "./types";

export const initialState: TodosState = {
  filter: "all",
  todos: [
    { id: 1, text: "Complete Todo App", completed: true },
    { id: 2, text: "Jog around the park 3x", completed: false },
  ],
};

export function todosReducer(
  state: TodosState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };
    case "CLEAR_COMPLETED":
      return { ...state, todos: state.todos.filter((t) => !t.completed) };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
