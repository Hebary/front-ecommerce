import { Link } from 'react-router-dom'
import useProducts from '../hooks/useProducts'
import useAuth from '../hooks/useAuth'
import CartWidget from '../components/CartWidget'

const Header = () => {

    const { logOut } = useProducts();
    const { auth, authLogOut } = useAuth();

    const handleLogOut = e => {
        e.preventDefault();
        logOut();
        authLogOut();
        localStorage.removeItem('token');
    }

    return (
        <header className="animate flex justify-between flex-wrap sm:h-auto from-sky-400 to-sky-600 bg-gradient-to-bl shadow-md px-5 py-3">
            <Link to="/products">
                <div className="flex items-center mb-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                    </svg>

                    <h2 className="text-3xl mb-2 ml-0  md:mb-0 font-light mt-2 sm:ml-2 text-black tracking-wider ">E-commerce
                        <span className="font-bold relative sm:right-2 right-3 sm:top-0 top-1 text-xs   block tracking-wide mb-0 md:mt-1">Online Shop</span></h2>
                </div>
            </Link>

            {auth._id ?
                <button type="button" className="px-4 p-1 my-4 mx-auto flex gap-2 text-lg items-center hover:text-black text-sky-900"
                // onClick={handleSearch}
                >
                    Search products
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                </button>
                : null}
            <div className="flex flex-wrap items-center gap-10">
                <Link
                    to="/products"
                    className="   font-bold text-xl mb-1 sm:mx-10 mx-auto hover:text-white tracking-widest"
                >All Products

                </Link>

                {

                    auth._id ?
                        <>
                            <button type="button" className="px-4 p-1 mb-1 mx-auto hover:bg-sky-900 hover:text-white border rounded-full border-black font-semibold text-sm"
                                onClick={handleLogOut}
                            >
                                Log out
                            </button>
                            <CartWidget />
                        </>
                        : <>
                            <Link
                                to="/create-account"
                                className="  font-bold text-xl mb-1 sm:mx-10 mx-auto hover:text-white tracking-widest"
                            >Sign up
                            </Link>
                            <Link
                                to="/"
                                className="  font-bold text-xl mb-1 sm:mx-10 mx-auto hover:text-white tracking-widest"
                            >Login
                            </Link>
                        </>
                }
            </div>


        </header>
    )
}

export default Header