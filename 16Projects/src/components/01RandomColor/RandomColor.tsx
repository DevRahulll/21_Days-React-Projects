import { useEffect, useState } from "react";

function RandomColor() {
  const [color, setColor] = useState<string>(() => {
    const storedColor = localStorage.getItem("bg-color");
    return storedColor ? storedColor : "rgb(0,0,0)";
  });

  function handleGenerateColor(): void {
    const r: number = Math.floor(Math.random() * 256);
    const b: number = Math.floor(Math.random() * 256);
    const g: number = Math.floor(Math.random() * 256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    localStorage.setItem("bg-color", color);
  }, [color]);

  useEffect(() => {
    handleGenerateColor();
    const storedColor: string | null = localStorage.getItem("bg-color");
    if (storedColor) setColor(storedColor);
  }, []);
  return (
    <div
      className="flex h-screen flex-col items-center justify-center gap-4"
      style={{ background: color }}
    >
      <button
        className="cursor-pointer rounded-2xl border-none bg-teal-500 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-center text-2xl text-white shadow-amber-50 transition-all outline-none hover:bg-gradient-to-bl focus:ring-cyan-300 focus:outline-none active:scale-95"
        onClick={handleGenerateColor}
      >
        Generate Random Color
      </button>
      <p className="px-2 py-1 text-3xl font-bold text-amber-200">{color}</p>
    </div>
  );
}

<button className="rounded-base bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2.5 text-center text-sm leading-5 font-medium text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 focus:outline-none dark:focus:ring-cyan-800">
  Cyan to Blue
</button>;

export default RandomColor;
