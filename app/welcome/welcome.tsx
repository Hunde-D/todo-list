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
        <a
          href="https://github.com/Hunde-D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center mt-auto mb-4 gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="currentColor"
            viewBox="0 0 24 24"
            className="inline-block"
            aria-hidden="true"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.01-1.05-.016-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.92.43.37.813 1.096.813 2.21 0 1.595-.015 2.88-.015 3.27 0 .322.216.698.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          By Hunde Desalegn
        </a>
      </div>
    </div>
  );
}
