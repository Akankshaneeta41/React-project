const ItemList = () => {
    return <div>
        <ul>
            {items.map(item => <li key={item.card.info}></li>)}
        </ul>
    </div>
}

export default ItemList;