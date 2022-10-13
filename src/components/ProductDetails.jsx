import { useState } from "react"
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount"
import { format } from "../helpers/helpers";
import Spinner from "./Spinner";
import useCart from "../hooks/useCart";

const ProductDetails = ({ product }) => {

    const [itemCount, setItemCount] = useState(0);
    const { addItem }  = useCart();
    const onAdd = count => {
        setItemCount(count)
        alert(`You have selected ${count} products: ${product.name}`)
        addItem(product, count)
    }

    return (
        <>
            {product._id ? 
            <div className=" animate md:flex gap-x-10  w-full">
                <div>
                    <h2 className="font-black text-left m-10 text-2xl">{product.name}</h2>
                    <img src={product.thumbnail} alt="img-curso" className=" w-4/3 h-72  m-10 rounded-lg" />
                </div>

                <div className="mt-20">
                    <p className=" text-md m-10 text-left">Price:{' '}<span className="font-bold">{format(product.price)}</span></p>
                    <p className=" text-md m-10 text-left">Stock:{' '}<span className="font-bold">{product.stock} Units</span></p>
                    {
                        itemCount <= 0
                            ? <ItemCount stock={product.stock} initial={itemCount} onAdd={onAdd} />
                            : <div className="md:flex items-center gap-x-3 justify-evenly">
                                <Link to='/products/cart'><button className=" bg-green-500 hover:bg-green-700 px-5 transition-colors duration-300 text-white font-black rounded-lg py-2 w-full">Checkout</button></Link>
                                <Link to='/'><button className="text-white font-black rounded-lg px-5 py-2 transition-colors duration-300 hover:bg-sky-600 bg-sky-400">Go Shop</button></Link>
                            </div>

                    }
                </div>
            </div>

                : <Spinner />}

        </>
    )
}


export default ProductDetails
