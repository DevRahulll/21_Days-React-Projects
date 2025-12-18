import { useRef } from "react";

export default function ScrollCustomize() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const slugRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  function scrollToSection(ref: React.RefObject<HTMLDivElement | null>): void {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleScrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="min-h-screen bg-black p-8 text-white">
      <div className="mb-4 flex items-center justify-around">
        <button
          onClick={() => scrollToSection(heroRef)}
          className="cursor-pointer rounded-md bg-blue-600 px-8 py-2 text-xl font-medium"
        >
          Scroll To Hero
        </button>
        <button
          onClick={() => scrollToSection(aboutRef)}
          className="cursor-pointer rounded-md bg-blue-600 px-8 py-2 text-xl font-medium"
        >
          Scroll To About
        </button>
        <button
          onClick={() => scrollToSection(contactRef)}
          className="cursor-pointer rounded-md bg-blue-600 px-8 py-2 text-xl font-medium"
        >
          Scroll To Contact
        </button>
        <button
          onClick={() => scrollToSection(slugRef)}
          className="cursor-pointer rounded-md bg-blue-600 px-8 py-2 text-xl font-medium"
        >
          Scroll To Slug
        </button>
        <button
          onClick={() => scrollToSection(bottomRef)}
          className="cursor-pointer rounded-md bg-blue-600 px-8 py-2 text-xl font-medium"
        >
          Scroll To Bottom
        </button>
      </div>
      <div className="">
        <div
          ref={heroRef}
          className="mb-2 flex h-screen items-center justify-center rounded-lg bg-orange-900 text-5xl font-semibold text-gray-300"
        >
          HERO SECTION
        </div>
        <div
          ref={aboutRef}
          className="mb-2 flex h-screen items-center justify-center rounded-lg bg-blue-900 text-5xl font-semibold text-gray-300"
        >
          ABOUT US
        </div>
        <div
          ref={contactRef}
          className="mb-2 flex h-screen items-center justify-center rounded-lg bg-teal-900 text-5xl font-semibold text-gray-300"
        >
          CONTACT US
        </div>
        <div
          ref={slugRef}
          className="mb-2 flex h-screen items-center justify-center rounded-lg bg-yellow-900 text-5xl font-semibold text-gray-300"
        >
          SLUG
        </div>
        <div className="mb-2 flex h-screen items-center justify-center rounded-lg bg-gray-800 text-5xl font-semibold text-gray-300">
          FOOTER
        </div>
      </div>
      <div ref={bottomRef} className="mt-2 text-center">
        <button
          onClick={handleScrollToTop}
          className="cursor-pointer rounded-md bg-blue-600 px-8 py-2 text-xl font-medium"
        >
          Scroll to Top
        </button>
      </div>
    </div>
  );
}
