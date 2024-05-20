const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="w bg-gray-50 shadow-lg p-2">
        <span>{data.title}</span>
        <span>⬇</span>
      </div>
     
    </div>
  );
};

export default RestaurantCategory;