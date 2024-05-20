const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-2 flex justify-between">
        <span className="font-bold text-lg">{data.title} ({data.itemCard.l})</span>
        <span>⬇</span>
      </div>
     
    </div>
  );
};

export default RestaurantCategory;
