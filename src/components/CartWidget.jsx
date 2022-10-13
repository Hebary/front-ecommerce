import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart'

const CartWidget = () => {
    
    const { cartList } = useCart();
    
    const [badge, setBadge] = useState(0)
    
    useEffect(()=>{
        const badge = cartList.reduce((total, item) => total + item.quantity, 0);
        setBadge(badge);
    },[cartList])


    return (

        <Link to="/products/cart">
        <div className="m-2">
            <img src="/cart.svg" alt="cart"  />
                {
                cartList.length > 0 &&
                    <div className = "counter bg-blue-900 h-1 w-1 text-white rounded-xl">
                        { badge }
                    </div>
                }
            </div>
        </Link>
    )
}

export default CartWidget;