import { useDispatch } from "react-redux";
import type { ProductType } from "../page/Home";
import { removeFromCart } from "../store/slice/cartSlice";

interface CardItemProps {
  cartItem: ProductType;
}

export default function CartItem({ cartItem }: CardItemProps) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }
  return (
    <div className="flex gap-6 items-center bg-slate-800 p-5 rounded-xl">
      <img
        src={cartItem.image}
        alt={cartItem.title}
        className="h-24 w-24 object-contain bg-white p-2 rounded-lg "
      />
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-white line-clamp-2">
          {cartItem.title}
        </h1>
        <p className="text-[#58dbbb] font-bold mt-2">₹ {cartItem.price}</p>
      </div>

      <button
        onClick={handleRemoveFromCart}
        className="bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-red-700 transition"
      >
        Remove from Cart
      </button>
    </div>
  );
}
