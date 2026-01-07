import { createContext, useState } from "react";

export interface GlobalContextType {
  formData: BlogItemTypes;
  setFormData: React.Dispatch<React.SetStateAction<BlogItemTypes>>;

  blogList: BlogItemTypes[];
  setBlogList: React.Dispatch<React.SetStateAction<BlogItemTypes[]>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

interface GlobalStateProps {
  children: React.ReactNode;
}

export interface BlogItemTypes {
  _id?: string;
  title: string;
  description: string;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

export const GlobalState = ({ children }: GlobalStateProps) => {
  const [formData, setFormData] = useState<BlogItemTypes>({
    title: "",
    description: "",
  });
  const [blogList, setBlogList] = useState<BlogItemTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        blogList,
        setBlogList,
        loading,
        setLoading,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
