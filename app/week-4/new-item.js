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

    return (
        <div className='flex mx-auto items-center bg-blue-100 border-blue-950 border-2 rounded w-40 h-16 gap-2'>
            <p className='px-4 w-12 text-xl'>{quantity}</p>

            <button onClick={decrement}
                disabled={quantity <= 1}
                className=' bg-blue-400 hover:bg-blue-600 active:bg-blue-800 disabled:bg-gray-400 rounded-xl border-blue-200 border-2 w-10 h-8 font-bold text-white'>
            -</button>

            <button onClick={increment}
                disabled={quantity >= 20}
                className=' bg-blue-400 hover:bg-blue-600 active:bg-blue-800 disabled:bg-gray-400 rounded-xl border-blue-200 border-2 h-8 w-10 font-bold text-white'>
            +</button>
        </div>
    )
}