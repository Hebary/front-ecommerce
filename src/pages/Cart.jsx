import { useEffect} from 'react'
import{ useNavigate } from 'react-router-dom'
import useCart from '../hooks/useCart'
import CartItem from '../components/CartItem'
import Summary from '../components/Summary'

const Cart = () => {

    //Hooks
    const {cartList, clearCartList, setEmpty, empty, resetQty} = useCart();
    
    const navigate = useNavigate();
    
    useEffect(()=>{
        cartList.length > 0 ? setEmpty(false) : setEmpty(true)
    },[cartList])
    
    //Funciones
    const handleClear=()=> {
        clearCartList();
        resetQty();
    }

return (
        <>
            <h1 className =" text-3xl order-1 text-center mt-10 text-sky-700 letter-space ">Your cart</h1> 
                {
                    cartList.length > 0  
                            ? cartList.map( item => ( 
                                <CartItem
                                    key={item._id}
                                    item={item}
                                />
                            ))  :   <div className="flex justify-evenly mt-10">
                                        <h1 className ="text-xl text-left m-5">Your Cart Is Empty ^^</h1>
                                        <button className="animate bg-blue-500 text-white font-bold p-2 m-5 w-1/5 h-10 rounded hover:bg-indigo-700 transition-colors duration-200"
                                        onClick={()=>navigate("/products")}>Home</button>
                                    </div> 
                }                           
                
                {   
                    !empty && 
                        <>
                            <div className="flex md:justify-end justify-center">
                                <button className=" animate bg-gray-400 text-white font-bold p-2 m-5 md:w-1/6 h-10 rounded hover:bg-gray-700 transition-colors duration-200"
                                onClick={handleClear}>Clear Cart</button>
    
                                <button className=" animate bg-blue-500 text-white font-bold p-2 m-5 md:w-1/5 h-10 rounded hover:bg-indigo-700 transition-colors duration-200"
                                onClick={() => navigate("/products")}>Continue Shopping</button>
                            </div>
                            <Summary/>
                        </>
                }
        </>
    )
}

export default Cart
