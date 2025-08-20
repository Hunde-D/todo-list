import { useReducer, useState } from "react";
import { todosReducer, initialState } from "../todos.reducer";
import { type Todo, type Filter } from "../types";

export function useTodos() {
  const [state, dispatch] = useReducer(todosReducer, initialState);
  const [newTodo, setNewTodo] = useState({ text: "", completed: false });

  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === "active") return !todo.completed;
    if (state.filter === "completed") return todo.completed;
    return true;
  });

  const getEmptyMessage = (filter: Filter) => {
    switch (filter) {
      case "active":
        return "You have no active tasks.";
      case "completed":
        return "Your completed tasks list is empty.";
      default:
        return "You have no tasks. Add one!";
    }
  };

  return {
    state,
    dispatch,
    newTodo,
    setNewTodo,
    filteredTodos,
    getEmptyMessage,
  };
}
