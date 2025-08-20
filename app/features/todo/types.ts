export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type Filter = "all" | "active" | "completed";

export type TodosState = {
  todos: Todo[];
  filter: Filter;
};

export type TodosAction =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "CLEAR_COMPLETED" }
  | { type: "SET_FILTER"; payload: Filter };
