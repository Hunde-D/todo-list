import { Checkbox } from "~/components/ui/checkbox";

export function TodoInput({ newTodo, setNewTodo, addTodo }: any) {
  return (
    <form
      className="bg-card w-full p-4 flex gap-4 my-10 items-center"
      onSubmit={(e) => {
        e.preventDefault();
        if (!newTodo.text.trim()) return;
        addTodo();
      }}
    >
      <Checkbox
        id="newTodo"
        className="rounded-full"
        checked={newTodo.completed}
        onCheckedChange={(checked: boolean) =>
          setNewTodo({ ...newTodo, completed: checked })
        }
      />
      <input
        value={newTodo.text}
        onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
        placeholder="Create a new todo..."
        className="w-full bg-transparent outline-none"
      />
    </form>
  );
}
