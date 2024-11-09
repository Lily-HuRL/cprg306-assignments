"use client";
import { useState, useEffect } from 'react';

export default function MealIdeas({ selectedItemName }) {
    const [meals, setMeal] = useState([]);

    async function loadMealIdeas() {
       
        const mealIdeas = await fetchMealIdeas(selectedItemName);
        setMeal(mealIdeas);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [selectedItemName]);

    return (
        <div className='flex flex-col pl-2 rounded-lg w-96'>
            <h2 className='text-2xl text-center font-bold pl-4 p-2'>Meal Ideas</h2>
            {!selectedItemName ? (
            <p className='text-lg font-bold pt-4 pb-4 pl-4'>Select an item to see meal ideas.</p>
        ) : meals.length === 0 ? (
            <p className='text-lg font-bold pt-4 pb-4 pl-4'>No meal ideas found for {selectedItemName}.</p>
        ) : (
            <div className='pl-4'>
                <p className='text-lg font-bold pt-4 pb-4'>Here are some meal ideas using {selectedItemName}: </p>
                <ul className='flex flex-col pt-4 gap-6'>
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className='flex gap-4 justify-between'>
                            <p>{meal.strMeal}</p>
                            <img src={meal.strMealThumb} alt={meal.strMeal} className='w-12 h-12 rounded-xl'/>
                        </li>
                    ))}
                </ul>
            </div>
        )}
        </div>
    );
}

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];   
    } catch (error) {
        console.error(error);
    }
}