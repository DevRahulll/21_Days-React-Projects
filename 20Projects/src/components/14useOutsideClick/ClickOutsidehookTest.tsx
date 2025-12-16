import { useRef, useState } from "react";
import UseClickOutside from "./UseOnClickOutside";

export default function ClickOutsidehookTest() {
  const [showContent, setShowContent] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  UseClickOutside(ref, () => setShowContent(false));

  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      {showContent ? (
        <div
          ref={ref}
          className="w-[350px] cursor-pointer rounded-lg bg-gray-800 p-6 shadow-lg"
        >
          <h1 className="mb-2 text-xl font-semibold">Click Outside Demo</h1>
          <p className="text-gray-300">
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button
          onClick={() => setShowContent(true)}
          className="cursor-pointer rounded-md bg-teal-600 px-6 py-2 text-lg font-medium hover:bg-teal-500 active:scale-95"
        >
          Show Content
        </button>
      )}
    </div>
  );
}
