import { useState, createContext, useEffect } from 'react';

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    totalPrice: 0,
}) 


// This Function is designed to check how a new product should be added to the cart
const addCartItemChecker = (cartItems, selectedProductToAdd) => {
    // Product already exist in cart
    const checkIfProductExists = cartItems.find((eachCartItem) => eachCartItem.id === selectedProductToAdd.id)
    if(checkIfProductExists){
        return cartItems.map((eachCartItem) => eachCartItem.id === selectedProductToAdd.id ? { ...eachCartItem, quantity: eachCartItem.quantity+1 } : eachCartItem)
    }
    // New product adding to Cart
    return [...cartItems, { ...selectedProductToAdd, quantity: 1 }]
}
// This Function is designed to check if a product should be removed or decrease the quantity of it
const removeCartItemChecker = (cartItems, selectedProductToRemove) => {
    const selectedProduct = (cartItems.find((eachCartItem) => eachCartItem.id === selectedProductToRemove.id));
    if(selectedProduct.quantity !== 1){
        return cartItems.map((eachCartItem) => eachCartItem.id === selectedProductToRemove.id ? { ...eachCartItem, quantity: eachCartItem.quantity-1 } : eachCartItem)
    } else {
        return cartItems.filter((eachCartItem) => eachCartItem.id !== selectedProduct.id);
    }
}
// This function wil delete the product from our cart immediately
const deleteAProduct = (cartItems, selectedProductToDelete) => {
    return cartItems.filter((eachCartItem) => eachCartItem.id !== selectedProductToDelete.id);
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------


export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    // Add product to cart items
    const addItemToCart = ( selectedProductToAdd ) => {
        setCartItems(addCartItemChecker(cartItems, selectedProductToAdd))
    }
    // Remove or Delete product from cart items
    const removeItemFromCart = ( selectedProductToRemove ) => {
        setCartItems(removeCartItemChecker(cartItems, selectedProductToRemove))
    }
    const deleteItemFromCart = ( selectedProductToDelete ) => {
        setCartItems(deleteAProduct(cartItems, selectedProductToDelete))
    }

    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(()=>{
        const newTotalPrice = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0)
        setTotalPrice(newTotalPrice)
    }, [cartItems])


    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {
        isCartOpen,
        setIsCartOpen, 
        cartItems, 
        setCartItems, 
        addItemToCart, 
        removeItemFromCart, 
        deleteItemFromCart, 
        cartCount, 
        totalPrice
    };
    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>

}