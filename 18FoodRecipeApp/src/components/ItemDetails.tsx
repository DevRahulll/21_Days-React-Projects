export default function ItemDetails() {
  return (
    <div className="continer mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={"#"}
            alt="img"
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-600 font-medium">{}</span>
        <h3 className="font-bold text-xl truncate text-gray-300">{}</h3>
        <div className="">
          <button>Add to Favourites</button>
        </div>
      </div>
    </div>
  );
}
