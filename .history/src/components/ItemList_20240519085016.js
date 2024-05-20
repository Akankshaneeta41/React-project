const ItemList = () => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id}>
          <div>
            <span>{item.card.info.id}</span>
            <span>{item.card.info.price}</span>
          </div>
          <p>{item.card.info.id}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
