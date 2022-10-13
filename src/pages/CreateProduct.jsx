import { useState } from 'react';
import useProducts from "../hooks/useProducts"
import Alert from '../components/Alert'


const CreateProduct = () => {

  const { showAlert, createProduct, alert, getOneProduct } = useProducts();

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const  [stock, setStock] = useState("");


  const handleSubmit = async e => {
    e.preventDefault();
    if([name, price, thumbnail, stock].includes("") ) {
      showAlert({msg: 'all Fields are required', error: true});
      return;
    }

    await createProduct({
      name,
      price,
      thumbnail,
      stock
    });
          
    setName("");
    setPrice("");
    setThumbnail("");
    setStock("");
    
  }
  
  const { msg } = alert;

  return (
    <div className="animate">
      <h1>Create Product</h1>
      {msg && <Alert alert={alert} />}
      <form className="mt-10 bg-white shadow-lg rounded-lg py-5 px-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col ">
          <label htmlFor="name" className="text-md my-2 uppercase text-gray-600 font-bold">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name"
            className="shadow p-3 rounded-lg  focus:outline-none"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="price" className="text-md my-2 uppercase text-gray-600 font-bold">Price</label>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="Enter price"
            className="shadow p-3 rounded-lg  focus:outline-none"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="thumbnail" className="text-md my-2 uppercase text-gray-600 font-bold">Thumbnail/URL</label>
          <input
            id="thumbnail"
            name="thumbnail"
            type="text"
            placeholder="Enter the url image"
            className="shadow p-3 rounded-lg  focus:outline-none"
            value={thumbnail}
            onChange={e => setThumbnail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="stock" className="text-md my-2 uppercase text-gray-600 font-bold">Stock</label>
          <input
            id="stock"
            name="stock"
            type="text"
            placeholder="Enter stock"
            className="shadow p-3 rounded-lg  focus:outline-none"
            value={stock}
            onChange={e => setStock(Number(e.target.value))}
            
          />
        </div>
        <input
          type="submit"
          value="Create Product"
          className="bg-sky-800 hover:bg-sky-700  text-white font-black py-2 px-4
                    cursor-pointer rounded-md w-full mt-7 mb-4 transition-colors duration-200"
        />
      </form>
    </div>
  )
}

export default CreateProduct