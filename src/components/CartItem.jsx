import { format } from "../helpers/helpers";
import useCart from "../hooks/useCart";

const CartItem = ({item}) => {

    const { removeItem } = useCart();
    
    const {_id, name, price, quantity, thumbnail } = item;

    return (
            <div className="animate flex">
                <div className="md:flex mb-5 justify-between container w-full" >
                    <div className="m-10">
                        <img src={thumbnail} alt={`img-curso ${item.name}`} className=" fix h-40  m-5 rounded-lg" />
                    </div>
                    <p className="text-2xl md:mt-32 ml-10 text-center">Product:{' '}
                        <span className="font-bold">{name}</span>
                    </p>
                    <div className="md:mt-20 md:mx-auto ml-20 ">
                        <p className=" my-2 text-2xl ">Units:{' '}<span className="font-bold">{quantity}</span></p>
                        <p className=" my-2 text-2xl ">Price:{' '}<span className="font-bold">{format(price*quantity)}</span></p>
                    </div>
                </div>
                <button type="button" className="animate bg-red-400 text-white font-bold p-2 h-10 w-1/6 m-5 relative top-24 rounded hover:bg-red-700 transition-colors duration-200"
                onClick={()=>removeItem(_id)}>Delete</button>
            </div>  
    )
}

export default CartItem
