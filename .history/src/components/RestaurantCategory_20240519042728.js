const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-2 flex justify-between">
        <span className="">{data.title}</span>
        <span>⬇</span>
      </div>
     
    </div>
  );
};

export default RestaurantCategory;
