import itemList from './itemList.css'
import Item from '../Item/Item'

function ItemList({ products }) {
    return (
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList