const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      {" "}
      <div>
        <span>{data.title}</span>
        <span>arrow</span>
      </div>
      ResCategory
    </div>
  );
};

export default RestaurantCategory;
