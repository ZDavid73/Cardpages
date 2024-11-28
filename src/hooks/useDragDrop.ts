import { useEffect, useState } from "react";

export interface ItemType {
    item: string;
    quantity: number;
    image: string;
}

const useDragDrop = () => {
    const [items, setItems] = useState<ItemType[]>([]);
    const [draggedItem, setDraggedItem] = useState<{item: string, image: string}| null>(null);

    useEffect(() => {
        const handleTouchMove = (e: TouchEvent) => {
            console.log('Touch move');
            if (draggedItem) {
                e.preventDefault(); // Prevent scrolling
            }
        };

        const handleTouchEnd = (e: TouchEvent) => {
            console.log('Touch end');
            if (draggedItem) {
                // Detect where the touch ends
                const targetElement = document.elementFromPoint(
                    e.changedTouches[0].clientX,
                    e.changedTouches[0].clientY
                );

                if (targetElement?.classList.contains("deck-creation-form")) {
                    // Add the dragged item to the list
                    const totalCardCount = items.reduce(
                        (acc, currentItem) => acc + currentItem.quantity,
                        0
                    );
                    const existingItem = items.find(i => i.item === draggedItem.item);

                    if (totalCardCount < 50) {
                        if (existingItem) {
                            if (existingItem.quantity < 4) {
                                setItems(prevItems =>
                                    prevItems.map(i =>
                                        i.item === draggedItem.item
                                            ? { ...i, quantity: i.quantity + 1 }
                                            : i
                                    )
                                );
                            }
                        } else {
                            setItems(prevItems => [
                                ...prevItems,
                                { ...draggedItem, quantity: 1 },
                            ]);
                        }
                    }
                }
                setDraggedItem(null); // Clear the dragged item
            }
        };

        // Add global event listeners
        document.addEventListener("touchmove", handleTouchMove, { passive: false });
        document.addEventListener("touchend", handleTouchEnd);

        // Cleanup
        return () => {
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleTouchEnd);
        };
    }, [draggedItem, items]);

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

    const handleTouchStart = (item: string, image: string) => {
        console.log(item, image)
        setDraggedItem({ item, image });
        console.log('Touch start');
        console.log('draggeditem:', draggedItem);
    };

    return {
        items,
        handleDrag,
        handleDrop,
        handleDragOver,
        handleClickRemove,
        handleTouchStart,
    };
};

export default useDragDrop;