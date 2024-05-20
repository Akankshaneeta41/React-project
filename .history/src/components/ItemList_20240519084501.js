const ItemList = () => {
  return (
    <div>
      
        {items.map((item) => (
          <div key={item.card.info.id}>
          <div>
<span>{item.card.info.id}</span>
<span>{item.card.info.price}</span>
          </div>
          </div>
        ))}
      
    </div>
  );
};

export default ItemList;
