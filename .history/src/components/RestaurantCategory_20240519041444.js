const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="w-full bg-gray-0 shadow-lg p-2">
        <span>{data.title}</span>
        <span>⬇</span>
      </div>
      ResCategory
    </div>
  );
};

export default RestaurantCategory;
