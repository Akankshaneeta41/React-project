const ItemList = ({items}) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-black border-b-2">
          <div className="p-2">
            <span>{item.card.info.name}</span>
            <span> ₹ {item.card.info.price? item.card.info.Price / 100 : item.card.info.defaultPrice / 100 }</span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
