import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons' 
const Product = (props) => {
    const {img, name, quantity, ratings, price, category} = props.product
    const handleAddToCart = props.handleAddToCart

    return (
        <div className='product'>
            <div className='card'>
                
            <img src={img} alt="" />
            <h6> {name} </h6>
            <p>Price: ${price} </p>
            <p>Category: {category} </p>
            <p> Rating: {ratings} </p>
            <button onClick={()=> handleAddToCart(props.product)}>Add to cart <FontAwesomeIcon icon={faShoppingBag} /></button>

            </div>

        </div>
    );
};

export default Product;