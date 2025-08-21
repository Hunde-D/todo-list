import { useTheme } from "~/providers/theme-provider";

export default function BackgroundImage() {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0">
      <img
        src={
          theme === "dark" ? "/bg-desktop-dark.jpg" : "/bg-desktop-light.jpg"
        }
        alt="Todo List Background"
        className="max-sm:hidden w-full h-auto object-cover"
      />
      <img
        src={theme === "dark" ? "/bg-mobile-dark.jpg" : "/bg-mobile-light.jpg"}
        alt="Todo List Background"
        className="hidden max-sm:block w-full h-auto object-cover"
      />
    </div>
  );
}
