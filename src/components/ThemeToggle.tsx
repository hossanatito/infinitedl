
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";
import { Toggle } from "./ui/toggle";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle 
      pressed={theme === "light"}
      onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="px-2.5 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
    >
      {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
      <span className="sr-only">{theme === "dark" ? "Dark" : "Light"} mode</span>
    </Toggle>
  );
}
