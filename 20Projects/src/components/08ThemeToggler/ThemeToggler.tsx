import { useTheme } from "./useTheme";

function ThemeToggler() {
  const [theme, setTheme] = useTheme("theme", "dark");

  function handleThemeToggler(): void {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div
      className={`${theme === "dark" ? "bg-white" : "bg-black"} flex h-screen items-center justify-center`}
    >
      <button
        onClick={handleThemeToggler}
        className={`cursor-pointer rounded-lg bg-black px-8 py-3 text-2xl font-medium transition-all duration-300 hover:scale-100 active:scale-90 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} `}
      >
        Change Theme
      </button>
    </div>
  );
}

export default ThemeToggler;
