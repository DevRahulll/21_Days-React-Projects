import { useState, type JSX } from "react";

export interface TabItem {
  label: string;
  content: JSX.Element;
}

interface customTabItem {
  tabsContent: TabItem[];
  onChange: (index: number) => void;
}

export default function CustomTab({ tabsContent, onChange }: customTabItem) {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  function handleClick(idx: number) {
    setCurrentTabIndex(idx);
    onChange(idx);
  }

  return (
    <div className="h-screen bg-black text-center text-white">
      <div className="flex items-center justify-center gap-2 p-8">
        {tabsContent.map((tabItem, index) => {
          const isActive = currentTabIndex === index;
          return (
            <div
              key={tabItem.label}
              onClick={() => handleClick(index)}
              className={`cursor-pointer rounded-lg border px-8 py-2 text-4xl font-bold ${isActive ? "bg-red-800" : "bg-teal-800"}`}
            >
              <span>{tabItem.label}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-5">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
