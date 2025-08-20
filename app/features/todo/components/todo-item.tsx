import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";
import { type Todo } from "../types";
import { X } from "lucide-react";

export function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
}: {
  todo: Todo;
  toggleTodo: () => void;
  deleteTodo: () => void;
}) {
  return (
    <div className="bg-card w-full py-4 px-6 flex gap-6">
      <Checkbox
        id={todo.id.toString()}
        className="rounded-full"
        checked={todo.completed}
        onCheckedChange={() => toggleTodo()}
      />
      <Label
        htmlFor={todo.id.toString()}
        className="peer-data-[state=checked]:line-through peer-data-[state=checked]:text-muted-foreground relative"
      >
        {todo.text}
      </Label>
      <X
        className="ml-auto text-muted hover:text-primary"
        onClick={() => deleteTodo()}
      />
    </div>
  );
}
