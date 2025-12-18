import { useEffect, useState } from "react";

interface ItemProps {
  id: number;
  title: string;
  category: string;
}

export default function ScrollIndicator() {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const [data, setData] = useState<ItemProps[]>([]);

  async function fetchData(): Promise<void> {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const products = await response.json();
      console.log(products.products);
      setData(products.products);
    } catch (error) {
      console.error("Error in fetching data", error);
    }
  }

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight,
    );

    const ScrolledHeightCalculation: number =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height: number =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((ScrolledHeightCalculation / height) * 100);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  return (
    <div className="relative flex h-full flex-col items-center justify-center bg-black">
      <div className="fixed top-0 left-0 z-50 w-full bg-slate-600 p-3 shadow-md">
        <h1 className="z-50 mb-2 text-center text-4xl font-bold text-white">
          Custom Scroll Indicator
        </h1>
        <div
          className="h-4 rounded-md bg-teal-400 transition-all duration-200"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
      <div className="mt-10 text-center">
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <p
              key={index}
              className="mb-2 font-mono text-lg font-medium text-gray-200"
            >
              {dataItem.title}
            </p>
          ))
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
}
