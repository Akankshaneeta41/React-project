import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-2 flex justify-between">
        <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
        <span>⬇</span>
      </div>
<I
    </div>
  );
};

export default RestaurantCategory;