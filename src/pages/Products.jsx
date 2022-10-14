import useProducts from "../hooks/useProducts"
import Product from "../components/Product"
import Spinner from "../components/Spinner";


const Products = () => {

  const ctx = useProducts();

  return (
    <>
      <h1 className="font-black text-4xl animate ">All Products</h1>
      {
        ctx?.products.length > 0 ?

          <div className="container animate">
            <div className="flex w-3/4 mx-auto shadow-lg justify-around mt-5 rounded-lg bg-white flex-wrap ">
              {ctx?.products.map(product => (
                <Product product={product} key={product._id} />
              ))
              }
            </div>
          </div>
          : <Spinner />
      }
    </>
  )
}

export default Products
