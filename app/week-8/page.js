"use client";

import MealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

import { useState } from "react";

export default function Page() {
    const [ items, setItems ] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleSelectItem = (name) => {
        const cleanedName = name.split(',')[0].replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim();
        setSelectedItemName(cleanedName);
    }

    return (
        <main className='m-6 flex items-start'>
            <div className='bg-slate-200 w-96'>
                <h1 className='text-3xl font-bold py-6 text-center'>Shopping List</h1>
                <div>
                    <div>
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList items={items} onItemSelect={handleSelectItem}/>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex-1'>
                    <MealIdeas selectedItemName={selectedItemName} />
                </div>
            </div>
        
        </main>
    );
}