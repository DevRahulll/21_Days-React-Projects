import { createContext, useState } from "react";

export interface GlobalContextType {
  formData: FormdataTypes;
  setFormData: React.Dispatch<React.SetStateAction<FormdataTypes>>;

  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;

  totalExpense: number;
  setTotalExpense: React.Dispatch<React.SetStateAction<number>>;

  totalIncome: number;
  setTotalIncome: React.Dispatch<React.SetStateAction<number>>;

  allTransactions: TransactionType[];
  setAllTransactions: React.Dispatch<React.SetStateAction<TransactionType[]>>;

  handleSubmit: (currentFormData: FormdataTypes) => void;
}

export interface FormdataTypes {
  type: string;
  amount: number;
  description: string;
}

export interface TransactionType {
  type: "income" | "expense";
  amount: number;
  description: string;
}

interface GlobalStateProps {
  children: React.ReactNode;
}

export const GlobalContext = createContext<
  GlobalContextType | undefined | null
>(undefined);

export default function GlobalState({ children }: GlobalStateProps) {
  const [formData, setFormData] = useState<FormdataTypes>({
    type: "income",
    amount: 0,
    description: "",
  });
  const [value, setValue] = useState<string>("expense");
  const [totalExpense, setTotalExpense] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [allTransactions, setAllTransactions] = useState<TransactionType[]>([]);

  function handleSubmit(currentFormData: FormdataTypes) {
    console.log(currentFormData);
  }

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        totalExpense,
        setTotalExpense,
        value,
        setValue,
        totalIncome,
        setTotalIncome,
        allTransactions,
        setAllTransactions,
        handleSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
