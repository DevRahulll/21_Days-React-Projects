import menus from "./data";
import TreeList from "./TreeList";

const TreeView = () => {
  return (
    <div className="h-screen bg-black p-10 text-gray-300">
      <h1 className="mb-6 text-3xl font-bold">Tree View</h1>
      <TreeList list={menus} />
    </div>
  );
};

export default TreeView;
