import React, { createContext, ReactNode } from "react";
import useDragDrop, { ItemType } from "../hooks/useDragDrop";

// Define the shape of the context
interface DragDropContextProps {
    items: ItemType[];
    handleDrag: (e: React.DragEvent, item: string, image: string) => void;
    handleDrop: (e: React.DragEvent) => void;
    handleDragOver: (e: React.DragEvent) => void;
    handleClickRemove: (item: string) => void;
    handleTouchStart: (e: React.TouchEvent, item: string, image: string) => void;
}

// Create the context
export const DragDropContext = createContext<DragDropContextProps | undefined>(undefined);

// Provider component
export const DragDropProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const {
        items,
        handleDrag,
        handleDrop,
        handleDragOver,
        handleClickRemove,
        handleTouchStart,
    } = useDragDrop();

    return (
        <DragDropContext.Provider
            value={{
                items,
                handleDrag,
                handleDrop,
                handleDragOver,
                handleClickRemove,
                handleTouchStart,
            }}
        >
            {children}
        </DragDropContext.Provider>
    );
};
