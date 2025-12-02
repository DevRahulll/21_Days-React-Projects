import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface noOfStarsProps {
  noOfStars?: number;
}

const StarRating = ({ noOfStars = 6 }: noOfStarsProps) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  function handleClick(getCurrentIdx: number): void {
    setRating(getCurrentIdx);
  }
  function handleMouseMove(getCurrentIdx: number): void {
    setHover(getCurrentIdx);
  }
  function handleMouseLeave(): void {
    setHover(rating);
  }
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-black">
        <h1 className="mb-7 text-7xl font-bold text-gray-50">
          Star <span className="text-yellow-400">Rating</span>
        </h1>
        <h3 className="mb-5 font-mono text-4xl text-gray-200">
          Your Rating {rating}/{noOfStars}
        </h3>
        <div className="flex flex-row">
          {[...Array(noOfStars)].map(
            (_, index) => (
              (index = index + 1),
              (
                <FaStar
                  key={index}
                  onClick={() => handleClick(index)}
                  onMouseMove={() => handleMouseMove(index)}
                  onMouseLeave={handleMouseLeave}
                  size={80}
                  className={`${index <= (hover || rating) ? "text-yellow-400" : "text-gray-400"} `}
                />
              )
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default StarRating;
