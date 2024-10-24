import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItems, onToggleItem, onClearList }) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;
    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description") {
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    }
    if (sortBy === "packed_status") {
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item key={item.id} onDeleteItems={onDeleteItems} item={item} onToggleItem={onToggleItem} />
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">SORT BY INPUT ORDER</option>
                    <option value="description">SORT BY DESCRIPTION</option>
                    <option value="packed_status">SORT BY PACKED STATUS</option>
                </select>
                <button onClick={onClearList}>Clear List</button>
            </div>
        </div>
    );
}

