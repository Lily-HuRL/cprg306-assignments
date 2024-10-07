"use client";
import { useState } from 'react';

export default function Counter() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    }

    const decrement = () => {
        setQuantity(quantity - 1);
    }

    const [name, setName] = useState('')
    const [category, setCategory] = useState('Produce')

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let item = { name, category, quantity }
        console.log(item)
        alert("Added item: " + name + ", quantity: " + quantity+ ", category: " + category)
        setName('')
        setCategory('Produce')
        setQuantity(1)
    }

    return (
        <div className='flex flex-col m-auto items-center bg-sky-100 rounded-lg shadow-md p-10 w-96'>
            <form onSubmit={handleSubmit} className='flex 
            flex-col items-center gap-6'>
                <label>
                    <input type="text" placeholder="Item name" value={name} onChange={handleNameChange} required className='border border-blue-950 rounded focus:border focus:border-gray-500 h-9 w-80 p-2 bg-white'/>
                </label>

                <div className='flex gap-7'>
                    <div value="Counter" className='flex items-center bg-white border-blue-950 border rounded w-36 h-9 gap-2'>
                        <p className='px-4 w-14'>{quantity}</p>

                        <button type="button" onClick={decrement}
                            disabled={quantity <= 1}
                            className=' bg-blue-400 hover:bg-blue-600 active:bg-blue-800 disabled:bg-gray-400 rounded-lg border-blue-200 border-2 w-8 h-6 font-bold text-white text-xs'>
                        -</button>

                        <button type="button" onClick={increment}
                            disabled={quantity >= 20}
                            className=' bg-blue-400 hover:bg-blue-600 active:bg-blue-800 disabled:bg-gray-400 rounded-lg border-blue-200 border-2 h-6 w-8 font-bold text-white text-xs'>
                        +</button>
                    </div>

                    <label>
                        <select value={category} onChange={handleCategoryChange} className='border-blue-950 border rounded h-9 w-36 pl-2 bg-white'>
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                </div>

                <button type="submit" className='border-blue-300 border-2 rounded-lg w-80 h-9 text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-800'>+</button>
            </form>
       
        </div>
    )
}