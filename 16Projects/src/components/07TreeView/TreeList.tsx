import type { TreeNode } from "./data";
import TreeItem from "./TreeItem";

interface TreeListProps {
  list: TreeNode[];
}

const TreeList = ({ list = [] }: TreeListProps) => {
  return (
    <ul className="pl-4">
      {list && list.length ? (
        list.map((listItem: TreeNode) => (
          <TreeItem key={listItem.label} item={listItem} />
        ))
      ) : (
        <p>No data found</p>
      )}
    </ul>
  );
};

export default TreeList;
