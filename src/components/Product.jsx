import { Link } from 'react-router-dom'
import { format } from '../helpers/helpers'

const Product = ({ product }) => {
    return (
        <>
            <div className="container md:w-3/4 border-b pb-3 flex-col md:flex-row justify-between cursor-pointer flex p-2 mx-1 bg-white">
                <div className="m-auto">
                    <img  src={product.thumbnail} className="md:w-1/3 md:mx-0 mx-auto w-1/2 rounded-t-lg" alt={`img product ${product.name}`} />
                </div>
                <div className="pt-3 flex flex-col text-center m-auto px-3">
                    <h5 className="text-gray-900 md:text-3xl text-xl text-center mb-1">{format(product.price)}</h5>
                    <p className="md:text-2xl text-xl my-2 font-semibold">{product.name}</p>
                    <p className="mb-2  text-sm font-semibold">Published:  
                        <span className="text-sm font-light text-gray-800">{' '}
                            {product.timestamps}
                        </span>
                    </p>

                    <Link to={`${product._id}`}>
                        <button className="mx-auto w-3/4 p-1 mb-auto border-indigo-300 border hover:bg-sky-600 transition-colors rounded-lg ">Details</button>
                    </Link>
                </div>
            </div>
        </> 
  )
}

export default Product
