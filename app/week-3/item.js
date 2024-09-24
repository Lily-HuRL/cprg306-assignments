export default function Item({name, quantity, category}) {
    return (
        <li className="bg-slate-300 mb-3 w-1/3 rounded-lg">
            <h2 className="text-xl font-bold p-2">{name}</h2>
            <p className="p-2">Buy {quantity} in {category}</p>
        </li>
    );
}