export default function Stats({ items }) {
    if (!items.length) {
        return (
            <p className="stats">
                <em>Start adding some items to your packing list🚀</em>
            </p>
        );
    }
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const packedPercentage = totalItems ? Math.round((packedItems / totalItems) * 100) : 0;

    return (
        <footer className="stats">
            <em>
                {packedPercentage === 100
                    ? "You've got everything! Ready to go ✈️"
                    : `💼 You have ${totalItems} items on your list, and you have packed ${packedItems} (${packedPercentage}%)`}
            </em>
        </footer>
    );
}
