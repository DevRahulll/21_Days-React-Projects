import { useEffect, useState } from "react";

interface ProductItemProps {
  id: number;
  title: string;
  thumbnail: string;
}

const LoadMoreData = () => {
  const [products, setProducts] = useState<ProductItemProps[]>([]);
  const [count, setCount] = useState<number>(0);
  const [disableButton, setDisableButton] = useState<boolean>(false);

  async function fetchProducts(): Promise<void> {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`,
      );
      const data: { products: ProductItemProps[] } = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisableButton(true);
    }
  }, [products]);

  return (
    <div className="flex h-full flex-col items-center justify-center bg-black">
      <div className="grid grid-cols-4 gap-8 p-10">
        {products &&
          products.map((item) => (
            <div
              key={item.id}
              className="rounded-md border-l-4 border-l-teal-600 bg-gray-400 p-8 text-center"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-[220px] w-[220px]"
              />
              <h3 className="text-xl font-medium">{item.title}</h3>
            </div>
          ))}
      </div>
      <button
        onClick={() => setCount(count + 1)}
        disabled={disableButton}
        className={`mb-10 max-w-[170px] cursor-pointer rounded-lg border-none px-8 py-2 text-xl text-gray-100 ${disableButton === true ? "text-black disabled:bg-gray-400" : "bg-teal-600 transition-all duration-200 ease-in-out outline-none hover:bg-teal-500 active:scale-90"}`}
      >
        Load Data
      </button>
    </div>
  );
};

export default LoadMoreData;
