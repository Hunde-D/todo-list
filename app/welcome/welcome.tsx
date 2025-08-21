import { ModeToggle } from "~/components/mode-toggle";
import { useTheme } from "~/providers/theme-provider";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import BackgroundImage from "~/components/background-img";

export function meta() {
  return [
    { title: "Welcome to Todo-App" },
    {
      name: "description",
      content: "Your simple and efficient todo list manager.",
    },
  ];
}

export default function Welcome() {
  const { theme } = useTheme();

  return (
    <div className="relative flex w-full flex-col h-screen max-w-screen-xl mx-auto py-0">
      {/* Background image */}
      <BackgroundImage />

      {/* Content */}
      <div className="flex flex-col flex-1 w-full max-w-xl px-5 mx-auto z-10 h-full text-center">
        <div className="absolute top-12 right-5">
          <ModeToggle />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground leading-tight my-24">
          Welcome to
          <br />T O D O
        </h1>

        <p className="text-lg text-secondary-foreground mb-4">
          A clean and intuitive way to manage your tasks.
        </p>

        <Link to="/todos">
          <Button size="lg" className="mt-4">
            Go to My Todos
          </Button>
        </Link>
      </div>
    </div>
  );
}
