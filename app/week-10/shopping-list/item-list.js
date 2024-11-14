"use client";
import { deleteItem } from "../_services/shopping-list-service";
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect}) {
    const [sortBy, setSortBy] = useState("name");
    const sortItems = (items, sortBy) => {
      const itemsCopy = [...items];
        return itemsCopy.sort((a, b) => {
            if (sortBy === "name") {
                return a.name.localeCompare(b.name);
            }
            if (sortBy === "category") {
                return a.category.localeCompare(b.category);
            }
            return 0;
        });
    };

    const [grouped, setGrouped] = useState(false);
    const groupByCategory = (items) => {
      const itemsCopy = [...items];
        const sortByCategory = sortItems(itemsCopy, "category");
        return sortByCategory.reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = [];
            }
            acc[item.category].push(item);
            acc[item.category].sort((a, b) => a.name.localeCompare(b.name));
            return acc;
        }, {});
    }
    const groupedItems = grouped ? groupByCategory(sortItems(items, sortBy)) : null;

  
    return (
      <main className="pl-8 pb-6">
        <div className="flex gap-2 items-center">
          <p className="font-semibold">Sort by: </p>
          <button
            className={`${sortBy === "name" && !grouped ? "bg-red-400" : "bg-red-200"} w-20 rounded-sm h-10`}
            onClick={() => {setSortBy("name");
                            setGrouped(false);}}
          >
            Name
          </button>
          <button
            className={`${sortBy === "category" && !grouped ? "bg-red-400" : "bg-red-200"} w-20 rounded-sm h-10`}
            onClick={() => {setSortBy("category");
                            setGrouped(false);}}
          >
            Category
          </button>
          <button className={`${grouped ? "bg-red-400" : "bg-red-200"} flex flex-wrap text-sm w-20 rounded-sm h-10`} onClick={() => setGrouped(true)}
          >
            Grouped Category
          </button>
        </div>
        <ul>
          {!grouped ? (sortItems(items, sortBy).map((item) => (
              <li key={item.id} className="mt-4">
                <Item 
                key={item.id} 
                name={item.name} 
                quantity={item.quantity} 
                category={item.category} 
                onSelect={() => onItemSelect(item.name)}/>
              </li>
            ))
           ) : (Object.entries(groupedItems).map(([category, items]) => (
              <div key={category}>
                <h2 className="font-semibold my-2 capitalize underline">{category}</h2>
                <ul  className="mb-8">
                  {items.map((item) => (
                    <li key={item.id}>
                      <Item 
                      key={item.id} 
                      name={item.name} 
                      quantity={item.quantity} 
                      category={item.category} 
                      onSelect={() => onItemSelect(item.name)}/>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </ul>   
      </main>
    );
}