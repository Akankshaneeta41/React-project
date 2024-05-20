import ItemList from "./ItemList";


const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const handleOnClick = () => {

    }

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-2 cursor-pointer" onClick={() => {setShowIndex}}>
        <div className="flex justify-between">
        <span className="font-bold text-lg ">{data.title}({data.itemCards.length})</span>
        <span>⬇</span>
        </div>
       { showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
