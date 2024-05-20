const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="w-full bg-gray-50 shadow-lg p-2">
        <span>{data.item}</span>
        <span>⬇</span>
      </div>
      ResCategory
    </div>
  );
};

export default RestaurantCategory;
