import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="m-6">
            <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

            <ul>
                <ItemList />
            </ul>
        </main>
    );
}