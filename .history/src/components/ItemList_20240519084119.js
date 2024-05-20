const ItemList = () => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div key={item.card.info.id}></div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
