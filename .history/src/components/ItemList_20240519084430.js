const ItemList = () => {
  return (
    <div>
      
        {items.map((item) => (
          <div key={item.card.info.id}>
          <div>
<span>{}</span>
          </div>
          </div>
        ))}
      
    </div>
  );
};

export default ItemList;