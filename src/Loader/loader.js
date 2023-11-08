import { faOtter } from "@fortawesome/free-solid-svg-icons"
import { getShoppingCart } from "../utilities/fakedb"

const loadData = async ()=> {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json()
    
    const storedCart = getShoppingCart()
    const savedCart = []
    for(const id in storedCart){
        console.log(id)
        const addedProduct = products.find (product=>product.id === id)
        if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity = quantity
            savedCart.push(addedProduct)
        }
    }

    return savedCart
}

export default loadData