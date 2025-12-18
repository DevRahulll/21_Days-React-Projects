import { useState } from "react";
import CustomTab, { type TabItem } from "./CustomTab";

export default function Tabs() {
  const tabs: TabItem[] = [
    {
      label: "Tab 1",
      content: (
        <div>
          <Tab1 />
        </div>
      ),
    },
    {
      label: "Tab 2",
      content: (
        <div>
          <Tab2 />
        </div>
      ),
    },
    {
      label: "Tab 3",
      content: (
        <div>
          <Tab3 />
        </div>
      ),
    },
  ];

  function handleChange(tabIndex: number) {
    console.log(tabIndex);
  }

  return <CustomTab tabsContent={tabs} onChange={handleChange} />;
}

function Tab1() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="">
      <div>
        <h1 className="text-4xl">Counter</h1>
        <h3 className="mt-10 font-mono text-3xl">
          Count: <span className="text-teal-500">{count}</span>
        </h3>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        <button
          className="rounded-lg bg-green-500 px-6 py-2 text-xl text-white"
          onClick={() => setCount((prev) => prev - 1)}
        >
          ➖
        </button>
        <button
          className="rounded-lg bg-red-500 px-6 py-2 text-xl text-white"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button
          className="rounded-lg bg-green-500 px-6 py-2 text-xl text-white"
          onClick={() => setCount((prev) => prev + 1)}
        >
          ➕
        </button>
      </div>
    </div>
  );
}
function Tab2() {
  return (
    <div className="mt-10">
      <h1 className="text-5xl text-yellow-400">This content is for Tab 2</h1>
    </div>
  );
}
function Tab3() {
  return (
    <div className="mt-10">
      <h1 className="font-sans text-5xl text-blue-400">Tab 3 Content</h1>
    </div>
  );
}
