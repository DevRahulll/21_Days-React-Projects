import useWindowResize from "./useWindowResize";

export default function useWindowResizeTest() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div className="min-h-screen bg-black p-30 text-center text-gray-300">
      <h1 className="mb-10 font-mono text-5xl font-semibold text-gray-200">
        Use Window Resize Custom Hook
      </h1>
      <div className="mx-auto w-fit border-2 border-white p-5">
        <p className="mb-2 text-2xl font-medium">
          Width is <span className="text-teal-300">{width}</span>
        </p>
        <p className="text-2xl font-medium">
          Height is <span className="text-teal-300">{height}</span>
        </p>
      </div>
    </div>
  );
}
