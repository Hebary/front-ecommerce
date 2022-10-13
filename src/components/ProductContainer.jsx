import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useProducts from '../hooks/useProducts';
import ProductDetails from './ProductDetails'


const ProductContainer = () => {

const { id } = useParams();
const { getOneProduct, productState } = useProducts();

useEffect (() => {
    const getProduct = async () => {
        await getOneProduct(id);
    }
    getProduct()
},  [  id, productState  ])

    return (
            < ProductDetails
                product={productState} 
            />
    );
}

export default ProductContainer ;