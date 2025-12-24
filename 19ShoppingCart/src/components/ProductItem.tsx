import type { ProductType } from "../page/Home";

interface ProductItemProps {
  product: ProductType;
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="h-120 w-100 border bg-slate-900 p-5 m-2 rounded-md">
      <div className="h-70">
        <img
          src={product?.image}
          alt={product?.title}
          className="object-center h-full w-full"
        />
      </div>
      <p className="text-left text-md font-medium mt-2">{product.title}</p>
      <div className="flex justify-between items-center mt-3">
        <p className="text-lg">Category : {product.category}</p>
        <p className="font-bold text-lg text-[#5cbb36]">₹ {product.price}</p>
      </div>
      <div className="flex items-center justify-center mt-5">
        <button className="px-8 py-2 text-black font-semibold cursor-pointer bg-[#03DAC6] text-lg rounded-lg hover:scale-105 transition-all duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
