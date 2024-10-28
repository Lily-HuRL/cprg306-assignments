"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

import { useState } from "react";

export default function Page() {
    const [ items, setItems ] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    return (
        <main className="m-6 bg-slate-200 w-96">
            <h1 className="text-3xl font-bold py-6 text-center">Shopping List</h1>

            <div>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items}/>
            </div>
            
        </main>
    );
}