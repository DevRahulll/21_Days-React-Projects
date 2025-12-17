import { useLayoutEffect, useState } from "react";

interface windowSizeTypes {
  width: number;
  height: number;
}

export default function useWindowResize(): windowSizeTypes {
  const [windowSize, setWindowSize] = useState<windowSizeTypes>({
    width: 0,
    height: 0,
  });

  function handleSize(): void {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return windowSize;
}
