import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import type { RootState } from "../store";

export default function Cart() {
  const [total, setTotal] = useState<number>(0);

  const cart = useSelector((state: RootState) => state.cart) || [];

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto px-4 mt-5">
      {cart && cart.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-5">
            {cart.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </div>

          <div className="bg-slate-800 rounded-xl p-6 h-fit sticky top-20">
            <h1 className="font-bold text-4xl text-[#BB86FC] mb-6">
              Your cart Summary
            </h1>

            <div className="flex justify-between text-lg mb-4">
              <span className="text-[#58dbbb] text-2xl font-bold">
                Total Item:{" "}
              </span>
              <span className="text-2xl font-extrabold">{cart.length}</span>
            </div>

            <div className="flex justify-between text-lg mb-4">
              <span className="text-[#58dbbb] text-2xl font-bold">
                Total amount:{" "}
              </span>
              <span className=" text-2xl font-bold">₹ {total}</span>
            </div>

            <button className="w-full bg-[#03DAC6] text-black font-bold py-3 rounded-lg hover:scale-105 transition cursor-pointer">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-[70vh] flex flex-col items-center justify-center">
          <h1 className="text-[#BB86FC] font-bold text-3xl mb-4">
            Your cart is empty
          </h1>
          <Link to={"/"}>
            <button className="px-8 py-2 text-black font-semibold cursor-pointer bg-[#03DAC6] text-lg rounded-lg hover:scale-105 transition-all duration-200">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
