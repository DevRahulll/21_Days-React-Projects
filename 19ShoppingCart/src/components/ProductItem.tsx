import { useDispatch, useSelector } from "react-redux";
import type { ProductType } from "../page/Home";
import { addToCart, removeFromCart } from "../store/slice/cartSlice";
import type { RootState } from "../store";

interface ProductItemProps {
  product: ProductType;
}

export default function ProductItem({ product }: ProductItemProps) {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart) || [];

  const safeCart = Array.isArray(cart) ? cart : [];

  const isInCart = safeCart.some((item) => item.id === product.id);

  function handleAddToCart() {
    console.log("adding");
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  return (
    <div className="h-120 w-100 border bg-slate-900 p-5 m-2 rounded-md">
      <div className="h-70 ">
        <img
          src={product?.image}
          alt={product?.title}
          className="object-contain bg-white/70 p-4 rounded-2xl  h-full w-full"
        />
      </div>
      <p className="text-left text-md font-medium mt-2 h-14">{product.title}</p>
      <div className="flex justify-between items-center mt-3">
        <p className="text-lg">Category : {product.category}</p>
        <p className="font-bold text-lg text-[#5cbb36]">₹ {product.price}</p>
      </div>
      <div className="flex items-center justify-center mt-5">
        <button
          onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
          className="px-8 py-2 text-black font-semibold cursor-pointer bg-[#03DAC6] text-lg rounded-lg hover:scale-105 transition-all duration-200"
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
