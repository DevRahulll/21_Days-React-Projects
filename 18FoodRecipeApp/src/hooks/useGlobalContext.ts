import { useContext } from "react";
import { GlobalContext } from "../context";

export default function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "use GlobalContext must be used within a GlobalState Provider"
    );
  }

  return context;
}
