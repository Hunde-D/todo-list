import type { Route } from "./+types/home";
import { useTodos } from "~/features/todo/hooks/use-todos";
import { ModeToggle } from "~/components/mode-toggle";
import { TodoInput } from "~/features/todo/components/todo-input";
import { TodoItem } from "~/features/todo/components/todo-item";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import BackgroundImage from "~/components/background-img";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "todos" },
    { name: "description", content: "Your Todos List" },
  ];
}

export default function TodoPage() {
  const {
    state,
    dispatch,
    newTodo,
    setNewTodo,
    filteredTodos,
    getEmptyMessage,
  } = useTodos();

  const addTodo = () => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Date.now(),
        text: newTodo.text,
        completed: newTodo.completed,
      },
    });
    setNewTodo({ text: "", completed: false });
  };

  return (
    <div className="relative flex w-full flex-col h-screen max-w-screen-xl mx-auto py-0">
      {/* Background image */}
      <BackgroundImage />
      {/* Content */}
      <div className="flex flex-col flex-1 w-full max-w-xl px-5  mx-auto z-10 h-full gap-10">
        <div className="flex justify-between items-center mt-12">
          <h1 className="text-3xl font-bold text-primary-foreground">
            T O D O
          </h1>
          <ModeToggle />
        </div>

        <TodoInput
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          addTodo={addTodo}
        />

        <div className="bg-card overflow-y-auto divide-y">
          {filteredTodos.length === 0 ? (
            <p className="p-4 text-secondary-foreground/30 text-center">
              {getEmptyMessage(state.filter)}
            </p>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={() =>
                  dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                }
                deleteTodo={() =>
                  dispatch({ type: "DELETE_TODO", payload: todo.id })
                }
              />
            ))
          )}
          <div className="bg-card w-full p-4 flex gap-4 justify-between items-center">
            <p className="text-secondary-foreground/30">
              {state.todos.filter((t) => !t.completed).length} items left
            </p>

            <div className="flex max-sm:hidden ">
              {["all", "active", "completed"].map((f) => (
                <Button
                  key={f}
                  variant="link"
                  className={cn({ "text-primary": state.filter === f })}
                  onClick={() =>
                    dispatch({ type: "SET_FILTER", payload: f as any })
                  }
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </Button>
              ))}
            </div>

            <Button
              variant="link"
              className="text-secondary-foreground/30"
              onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
            >
              clear completed
            </Button>
          </div>
        </div>

        <div className="hidden max-sm:flex gap-2 bg-card justify-center">
          {["all", "active", "completed"].map((f) => (
            <Button
              key={f}
              variant="link"
              className={cn({ "text-primary": state.filter === f })}
              onClick={() =>
                dispatch({ type: "SET_FILTER", payload: f as any })
              }
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
