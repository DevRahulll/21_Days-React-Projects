import useFetch from "./useFetch";

interface Product {
  id: number;
  title: string;
}

interface ProductsResponse {
  products: Product[];
}

export default function UseFetchTest() {
  const { data, loading } = useFetch<ProductsResponse>({
    url: "https://dummyjson.com/products",
  });

  return (
    <div className="min-h-screen bg-black p-8 text-center text-gray-300">
      <h1 className="mb-8 font-mono text-4xl font-semibold">Use Fetch Hook</h1>
      <div className="flex flex-col gap-4">
        {loading ? <h3>Loading...</h3> : null}
        {data && data.products && data.products.length ? (
          data.products.map((Item) => <p key={Item.id}>{Item.title}</p>)
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
}
