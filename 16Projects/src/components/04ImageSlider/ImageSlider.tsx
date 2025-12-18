import { useEffect, useState } from "react";
import {
  BiSolidLeftArrowCircle,
  BiSolidRightArrowCircle,
} from "react-icons/bi";

interface ImageItem {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const ImageSlider = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  async function fetchImages(): Promise<void> {
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=7",
      );
      const data: ImageItem[] = await response.json();
      setImages(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleLeftClick(): void {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function handleRightClick(): void {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="relative mx-auto h-[400px] max-w-[600px] overflow-hidden rounded-xl border border-gray-100 text-white shadow-[0_4px_20px_rgba(255,255,255,0.50)]">
        <BiSolidLeftArrowCircle
          size={60}
          className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer drop-shadow-lg transition-all hover:scale-105 active:scale-95"
          onClick={handleLeftClick}
        />
        {images &&
          images.length &&
          images.map((photo: ImageItem, index: number) => (
            <img
              key={photo.id}
              src={photo.download_url}
              alt="Images"
              className={`${
                currentSlide === index
                  ? "inset-0 h-full w-full object-cover duration-500"
                  : "hidden"
              }`}
            />
          ))}
        <BiSolidRightArrowCircle
          size={60}
          className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-white drop-shadow-lg transition-all hover:scale-105 active:scale-95"
          onClick={handleRightClick}
        />
        <div className="absolute bottom-4 flex w-full justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-500"}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
