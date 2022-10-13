import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import CreateAccount from "./pages/CreateAccount"

import AuthLayout from "./layout/AuthLayout"
import ProtectedRoute from "./layout/ProtectedRoute"
import Products from "./pages/Products"
import CreateProduct from "./pages/CreateProduct"
import { AuthProvider } from "./context/authProvider"
import  { ProductsProvider } from "./context/productsProvider"
import ProductContainer from "./components/ProductContainer"
import Cart from "./pages/Cart"
import CartContextProvider from "./context/cartProvider"

function App() {

    return (
      
      <BrowserRouter>
        <AuthProvider>
          <ProductsProvider>
            <CartContextProvider>
            <Routes>
              <Route path="/" element={<AuthLayout/>}>
                <Route index element={<Login/>}/>
                <Route path="/create-account" element={<CreateAccount/>}/>
              </Route>

              <Route path="/products" element={<ProtectedRoute/>}>
                <Route index element={<Products/>}/>
                <Route path="create-product" element={<CreateProduct/>}/>
|               <Route path=":id" element={<ProductContainer/>}/>
                <Route path="cart" element={<Cart/>}/>
              </Route>

            </Routes>
            </CartContextProvider>
          </ProductsProvider>
        </AuthProvider>
      </BrowserRouter>
    )
}

export default App
