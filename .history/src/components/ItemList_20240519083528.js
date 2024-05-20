const ItemList = () => {
    return <div>
        <ul>
            {items.map(item => <li key={item.card}></li>)}
        </ul>
    </div>
}

export default ItemList;