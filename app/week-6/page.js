import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="m-6 bg-slate-200 w-96">
            <h1 className="text-3xl font-bold py-6 text-center">Shopping List</h1>

            <ul>
                <ItemList />
            </ul>
        </main>
    );
}