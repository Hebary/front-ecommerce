import { useContext } from "react"
import ProductsContext from '../context/productsProvider'; 

const useProducts = () => useContext(ProductsContext);

export default useProducts;

