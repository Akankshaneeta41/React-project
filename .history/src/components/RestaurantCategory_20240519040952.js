const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="w-full bg-gray-400">
        <span>{data.title}</span>
        <span>⬇</span>
      </div>
      ResCategory
    </div>
  );
};

export default RestaurantCategory;
