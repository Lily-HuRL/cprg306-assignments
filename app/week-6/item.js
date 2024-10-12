export default function Item({name, quantity, category}) {
    return (
        <div className="bg-slate-300 mb-3 w-80 rounded-lg">
            <h2 className="text-lg font-bold pl-3 py-1 pt-2">{name}</h2>
            <p className="pl-3 pb-2">Buy {quantity} in {category}</p>
        </div>
    );
}