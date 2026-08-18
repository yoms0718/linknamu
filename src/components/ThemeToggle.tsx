"use client";

export default function ThemeToggle() {
  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="다크모드 전환"
      className="rounded-full border border-black/10 p-2 text-sm dark:border-white/15"
    >
      <span className="dark:hidden">☀️</span>
      <span className="hidden dark:inline">🌙</span>
    </button>
  );
}
