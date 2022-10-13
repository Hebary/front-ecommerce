import { createContext, useState } from 'react';

const CartContext = createContext();


const CartContextProvider = ({children})=>{
    // Hooks
    const [cartList, setCartList] = useState([]);
    const [empty, setEmpty] = useState(true);

    //Functions for the Context 
    const addItem = (cartItem, qty) => {
        if( cartList.some(item => item._id === cartItem._id) ){ 
            const newCartList = cartList.map(item => {
                if( item._id === cartItem._id ) item.quantity += qty;
                    return item;  //updated   
            })
            setCartList(newCartList);
        }else{
            setCartList([...cartList, {...cartItem, quantity: qty}])
        }
    setEmpty(false);
    }

    const removeItem = id => {
        setCartList(cartList.filter( item => item._id !== id))
        resetQty();
    }
    const clearCartList = () => {
        setCartList([]);
    }
    //reset qty of items deleteded form Cart
    const resetQty = () => {
        cartList.map(item => item.quantity !== 1 ? 
            item.quantity = item.quantity : item.quantity = 1);
    }

    return(
        <CartContext.Provider 
            value={{
                    cartList,
                    addItem, 
                    removeItem,
                    clearCartList,
                    setEmpty,
                    empty,
                    resetQty,                      
                }}>

            {children}

        </CartContext.Provider>

    );
}

export{
    CartContext
}

export default CartContextProvider;