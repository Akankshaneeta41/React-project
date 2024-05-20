const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="w-full bg-gray-400 shadow-lg padd">
        <span>{data.title}</span>
        <span>⬇</span>
      </div>
      ResCategory
    </div>
  );
};

export default RestaurantCategory;
