import { useState } from "react";

interface propsItem {
  header: string;
  content: string;
}

export default function ModalContent({ header, content }: propsItem) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClick(): void {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      <button
        onClick={handleClick}
        className="text-md cursor-pointer rounded-md bg-blue-700 px-8 py-2 text-white shadow-md hover:bg-blue-600 active:scale-95"
      >
        {isOpen ? "Close" : "Open"} Modal
      </button>
      {isOpen && (
        <div
          onClick={handleClick}
          className="bg-opacity-70 fixed inset-0 z-40 flex items-center justify-center bg-black backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-fadeIn w-[350px] scale-100 transform cursor-cell rounded-lg bg-gray-800 p-6 shadow-lg transition-all"
          >
            <div className="mb-4 flex items-center justify-between">
              <h1 className="text-xl font-semibold">{header}</h1>
              <button
                onClick={handleClick}
                className="cursor-pointer rounded-md bg-red-600 px-3 py-1 text-sm font-medium hover:bg-red-500 active:scale-95"
              >
                X
              </button>
            </div>
            <p className="leading-relaxed text-gray-300">{content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
