import { useState } from "react";

export interface ItemType {
    item: string;
    quantity: number;
    image: string;
}

const useDragDrop = () => {
    const [items, setItems] = useState<ItemType[]>([]);

    const handleDrag = (e: React.DragEvent, item: string, image: string) => {
        e.dataTransfer.setData('text', JSON.stringify({ item, image }));
    };

    const handleDrop = (e: React.DragEvent) => {
        const data = e.dataTransfer.getData('text');
        const { item, image } = JSON.parse(data);

        const totalCardCount = items.reduce((acc, currentItem) => acc + currentItem.quantity, 0);
        const existingItem = items.find(i => i.item === item);

        if (totalCardCount < 50) {
            if (existingItem) {
                if (existingItem.quantity < 4) {
                    setItems(prevItems =>
                        prevItems.map(i =>
                            i.item === item ? { ...i, quantity: i.quantity + 1 } : i
                        )
                    );
                }
            } else {
                setItems(prevItems => [...prevItems, { item, quantity: 1, image }]);
            }
        }
    };

    const handleDropDelete = (e: React.DragEvent) => {
        const data = e.dataTransfer.getData('text');
        const { item } = JSON.parse(data);
        setItems(prevItems => {
            return prevItems
                .map(i => i.item === item ? { ...i, quantity: i.quantity - 1 } : i)
                .filter(i => i.quantity > 0);
        });
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleClickRemove = (item: string) => {
        setItems(prevItems => {
            const itemToRemove = prevItems.find(i => i.item === item);
            if (itemToRemove) {
                // Reduce quantity if greater than 1, otherwise remove the item
                return itemToRemove.quantity > 1
                    ? prevItems.map(i =>
                        i.item === item ? { ...i, quantity: i.quantity - 1 } : i
                    )
                    : prevItems.filter(i => i.item !== item);
            }
            return prevItems;
        });
    };

    return {
        items,
        handleDrag,
        handleDrop,
        handleDragOver,
        handleDropDelete,
        handleClickRemove,
    };
};

export default useDragDrop;