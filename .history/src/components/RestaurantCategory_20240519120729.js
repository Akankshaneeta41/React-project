import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-2 ">
        <div className="flex justify-between" onClich>
        <span className="font-bold text-lg ">{data.title}({data.itemCards.length})</span>
        <span>⬇</span>
        </div>
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
