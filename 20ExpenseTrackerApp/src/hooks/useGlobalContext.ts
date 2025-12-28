import { GlobalContext } from "@/context/context";
import { useContext } from "react";

export default function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "use GlobalContext must be used within a GlobalState Provider"
    );
  }

  return context;
}
