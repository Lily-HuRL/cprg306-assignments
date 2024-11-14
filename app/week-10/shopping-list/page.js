"use client";

import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import { useEffect } from "react";

import MealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import NewItem from "./new-item";

import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";


import { useState } from "react";

export default function Page() {
    const { user } = useUserAuth();

    const [ items, setItems ] = useState([]);
    const handleAddItem = async (newItem) => {
        try{
            const userId = await addItem(user.uid, newItem);
            const newItemWithId = {id: userId, ...newItem};
            setItems([...items, newItemWithId]);
        } catch (error) {
            console.error(error);
        }
    }

    const [selectedItemName, setSelectedItemName] = useState(null);
    const handleSelectItem = (name) => {
        const cleanedName = name.split(',')[0].replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim();
        setSelectedItemName(cleanedName);
    }


    const handleDeleteItem = async () => {
        try {
            const itemToDelete = items.find(item => item.name === selectedItemName);
            if (itemToDelete) {
                await deleteItem(user.uid, itemToDelete.docId);
                const updatedItems = items.filter(item => item.docId !== itemToDelete.docId);
                setItems(updatedItems);
                setSelectedItemName(null);
            }
        } catch (error) {
            console.error(error);
        }
    }


    async function loadItems() {
        const loadedItems = await getItems(user.uid);
        setItems(loadedItems);
    }

    useEffect(() => {
       if (user) {  
            loadItems();
        };
    }, [user]);



    return (
        <main className='m-6 flex items-start'>
            <div className='bg-slate-200 w-96'>
                <h1 className='text-3xl font-bold py-6 text-center'>Shopping List</h1>
                {selectedItemName && (
                    <p className="px-8 py-2 text-sm text-blue-600">
                        Selected item: {selectedItemName}
                    </p>
                )}
                <div>
                    <div>
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList items={items} 
                        onItemSelect={handleSelectItem}
                        selectedItemName={selectedItemName}/>
                    </div>
                </div>
                <div>
                    <button className="ml-8 mb-4 bg-gray-600 h-9 w-20 text-gray-50 active:bg-slate-500" onClick={handleDeleteItem}>Delete</button>
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