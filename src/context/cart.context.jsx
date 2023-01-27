import { useState, createContext } from 'react';

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
}) 


// 
const addCartItemChecker = (cartItems, selectedProductToAdd) => {
    // Product already exist in cart
    const checkIfProductExists = cartItems.find((eachCartItem) => eachCartItem.id === selectedProductToAdd.id)
    if(checkIfProductExists){
        return cartItems.map((eachCartItem) => eachCartItem.id === selectedProductToAdd.id ? { ...eachCartItem, quantity: eachCartItem.quantity+1 } : eachCartItem)
    }
    // New product adding to Cart
    return [...cartItems, { ...selectedProductToAdd, quantity: 1 }]
}


export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addItemToCart = ( selectedProductToAdd ) => {
        setCartItems(addCartItemChecker(cartItems, selectedProductToAdd))
    }

    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen, cartItems, setCartItems, addItemToCart};
    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>

}