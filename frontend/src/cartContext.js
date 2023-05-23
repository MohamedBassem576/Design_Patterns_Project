import { createContext, useState } from "react";


export const CartContext = createContext({
    items:[],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}){
    const [cartProducts, setCartProducts] = useState([])

    function getProductQuantity(id){
        const quantity = cartProducts.find(product => product.id === id)?.quantity
        if(quantity === undefined){
            return 0;
        }else{
            return quantity;
        }
        
    }
    function addOneToCart(id, price, _id){
        const quantity = getProductQuantity(id);

        if(quantity === 0){ //product not in cart
            setCartProducts(
                [
                    ...cartProducts, {id: id, quantity: 1, price: price, _id: _id}
                ]
            )
        }else{
            setCartProducts(
                cartProducts.map(p => p.id === id? {...p, quantity: p.quantity + 1}: p)
            )
        }
    }
    function removeOneFromCart(id){
        const quantity = getProductQuantity(id);
        if(quantity === 1){
            deleteFromCart(id);
        }else{
            setCartProducts(
                cartProducts.map(p => p.id === id? {...p, quantity: p.quantity - 1}: p)
            )
        }
    }

    function deleteFromCart(id){
        setCartProducts(
            cartProducts => cartProducts.filter(p => {
                return p.id !== id;
            })
        )
    }

    function getTotalCost(){
        let totalCost =0;
        cartProducts.map((cartItem) => {
            totalCost += (cartItem.price * cartItem.quantity)
        })
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;