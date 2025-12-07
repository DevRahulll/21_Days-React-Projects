import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import TreeList from "./TreeList";
import type { TreeNode } from "./data";

interface TreeItemProps {
  item: TreeNode;
}

const TreeItem = ({ item }: TreeItemProps) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState<
    Record<string, boolean>
  >({});

  function handleToggleChildren(label: string): void {
    setDisplayCurrentChildren((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  }

  return (
    <li className="mb-2">
      <div className="flex cursor-pointer items-center gap-2">
        <h1 className="font-medium text-gray-300">{item.label}</h1>
        {item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={20} />
            ) : (
              <FaPlus color="#fff" size={20} />
            )}
          </span>
        ) : (
          <span className="opacity-0 select-none">
            <span style={{ opacity: 0 }}>•</span>
          </span>
        )}
      </div>

      {item.children &&
        item.children.length > 0 &&
        displayCurrentChildren[item.label] && <TreeList list={item.children} />}
    </li>
  );
};

export default TreeItem;
