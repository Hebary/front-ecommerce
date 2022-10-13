import { useState } from 'react'

const ItemCount = ({onAdd, stock }) => {

    const [count, setCount] = useState(0)

    return (
    
        <div className="flex w-full ml-6 ">
            <div className="flex justify-between text-center p-2 w-full mx-3 my-2 border-indigo-400 border rounded-lg">
                <button type="button" 
                        className="font-bold text-xl" 
                        onClick={()=>{
                            if (count <= 0) return;
                            setCount(count-1);
                        }}>-</button>
                <p className="text-xl">{count}</p>
                <button className="font-bold text-xl " 
                        onClick={()=>{
                            if (count>=stock) return;
                            setCount(count+1);
                        }}>+</button>
            </div>
            
            {
                count === 0
                    ? <button disabled={true} className="bg-gray-50 w-full rounded-lg text-black font-black cursor-not-allowed text-xs px-5 py-0  shadow-md">Add To Cart</button>
                    : <button onClick={()=>onAdd(count)} className="bg-indigo-500 text-white font-black rounded-lg cursor-pointer hover:bg-indigo-700 text-xs px-5 py-0   m-2 w-full mx-auto shadow-md">Add To Cart</button>
            }
        </div>
    );
}

export default ItemCount 