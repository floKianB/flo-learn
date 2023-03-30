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
    const exitingCourseNames = [];
    cartItems.forEach((eachExistingCourse)=>exitingCourseNames.push(eachExistingCourse.name));
    console.log(exitingCourseNames)
    const courseAlreadyExists = exitingCourseNames.includes(selectedProductToAdd.name)
    if(!courseAlreadyExists){
        return [...cartItems, { ...selectedProductToAdd }];
    } else {
        return [...cartItems];

    }
    
}
// This function wil delete the product from our cart immediately
const deleteAProduct = (cartItems, selectedProductToDelete) => {
    console.log(selectedProductToDelete);
    return cartItems.filter((eachCartItem) => eachCartItem.name !== selectedProductToDelete.name);
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------


export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    // Add product to cart items
    const addItemToCart = ( selectedProductToAdd ) => {
        setCartItems(addCartItemChecker(cartItems, selectedProductToAdd))
    }
    // Delete product from cart items
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
        deleteItemFromCart, 
        cartCount, 
        totalPrice
    };
    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>

}