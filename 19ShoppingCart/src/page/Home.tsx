import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductItem from "../components/ProductItem";

export interface ProductType {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category?: string;
}

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchProducts(): Promise<void> {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);

      if (data) {
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {
      console.error("error in fetching data", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="mt-10 min-h-[80vh]">
      {loading ? (
        <div className="flex items-center justify-center min-h-[80vh]">
          <Circles
            height={"120"}
            width={"120"}
            color="#3700B3"
            visible={true}
          />
        </div>
      ) : (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products && products.length
            ? products.map((Item) => (
                <ProductItem key={Item.id} product={Item} />
              ))
            : null}
        </div>
      )}
    </div>
  );
}
