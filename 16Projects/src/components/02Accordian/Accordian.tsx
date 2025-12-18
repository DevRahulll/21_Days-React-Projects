import { useState, type FC } from "react";
import data from "./data";
import type { AccordianItems } from "./data";

const Accordian: FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  function handleSelection(getcurrentId: string): void {
    setSelected(selected === getcurrentId ? null : getcurrentId);
  }
  console.log(selected);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 bg-black text-white">
      <h1 className="cursor-pointer rounded-lg border-none bg-teal-600 px-5 py-4 text-4xl font-semibold text-white outline-none">
        Accordian
      </h1>
      <div className="">
        {data && data.length > 0 ? (
          data.map((dataItem: AccordianItems) => (
            <div key={dataItem.id} className="mx-auto mb-4 max-w-[700px]">
              <div className="m-2 mb-1 rounded-lg border-white bg-blue-700 p-4 text-center text-2xl font-medium">
                <h3
                  className="cursor-pointer"
                  onClick={() => handleSelection(dataItem.id)}
                >
                  {dataItem.question}
                </h3>
              </div>
              {selected === dataItem.id ? (
                <p className="mx-auto flex max-w-[680px] flex-col rounded-lg bg-green-600 p-4 text-xl text-white">
                  {dataItem.answer}
                </p>
              ) : null}
            </div>
          ))
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
};

export default Accordian;
