const ItemList = () => {
    return <div>
        <ul>
            {items.map(item => <li key={item}></li>)}
        </ul>
    </div>
}

export default ItemList;