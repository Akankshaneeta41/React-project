const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      {" "}
      <div className="">
        <span>{data.title}</span>
        <span>⬇</span>
      </div>
      ResCategory
    </div>
  );
};

export default RestaurantCategory;
