import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosClient from '../config/axiosClient';
import useAuth from '../hooks/useAuth'; 

const ProductsContext = createContext();


const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [alert, setAlert] = useState({});
    const [productState, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const { auth } = useAuth();
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return;
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
                const { data } = await axiosClient('/products', config);
                setProducts(data);

            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    }, [])

  

    const showAlert = alert => {
        setAlert(alert);
        setTimeout(() => { setAlert({}) }, 2000);
    }

    const submitProduct = async product => {
        if (product.id) {
            updateProduct(product)
        } else {
            await createProduct(product)
        }
    }


    //CREATE A NEW product
    const createProduct = async product => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return;
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
            const { data } = await axiosClient.post('/products', product, config);
            setProducts([...products, data]);

            showAlert({
                msg: 'product created successfully',
                error: false
            });

            setTimeout(() => {
                navigate("/products");
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    }

    //GET ONE product
    const getOneProduct = async id => {
        setLoading(true);
        
        try {
            const token = localStorage.getItem('token');
            if (!token) return;
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
            const { data } = await axiosClient(`/products/${id}`, config);
            setProduct(data)
            
        } catch (error) {
            navigate("products")
            showAlert({
                msg: error?.response.data?.msg,
                error: true
            })
        } finally {
            setLoading(false);
            // setProduct({})
        }
    }
    
     //EDIT A product
     const updateProduct = async product => {
        try {
                const token = localStorage.getItem('token');
                if (!token) return;
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
                const { data } = await axiosClient.put(`/products/${product.id}`, product, config)

                const updatedProduct = products.map(productState => productState._id === data._id ? data : productState);

                setProducts(updatedProduct);

                showAlert({
                    msg: 'product edition successfully',
                    error: false
                });

            } catch (error) {
            console.log(error);
        }
    }
   
    //DELETE ONE product
    const deleteProduct = async (id) => {
        try {

            const token = localStorage.getItem('token');
            if (!token) return;
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }

            const { data } = await axiosClient.delete(`/products/${id}`, config)
            showAlert({
                msg: data.msg,
                error: false
            });

            const productsState = products.filter(productState => productState._id !== id);
            setProducts(productsState);

            setTimeout(() => {
                navigate("/products");
            }, 3000);

        } catch (error) {
            showAlert({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

   
    //Log out

    const logOut = () => {
        setProducts([]);
        setAlert({});
        setProduct({});
        setLoading(false);
        
    }


    return (
        <ProductsContext.Provider
            value={{
                showAlert,
                alert,
                createProduct,
                products,
                productState,
                getOneProduct,
                loading,
                deleteProduct,
                logOut,

            }}>
            {children}
        </ProductsContext.Provider>
    );
}

export {
    ProductsProvider
}

export default ProductsContext;
