import { Moon, Sun } from "lucide-react";
import { useTheme } from "~/providers/theme-provider";
import { Button } from "./ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div
      className="relative hover:text-primary text-primary-foreground"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun
        className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        size={20}
      />
      <Moon
        className="absolute top-0 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        size={20}
      />
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
