import React from "react";
import ContainerProps from "./container.type";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { Button } from "../Button";

const Container = ({
  id,
  children,
  title,
  description,
  onAddItem,
}: ContainerProps) => {
  // Initialize sortable hooks and handlers for drag-and-drop functionality
  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id, // The unique identifier for the container
    data: {
      type: "container", // Custom data type for sorting
    },
  });

  return (
    <div
      {...attributes} // Apply sortable attributes to the container div
      ref={setNodeRef} // Set reference for sortable node
      style={{
        transition, // Apply transition for smooth drag effect
        transform: CSS.Translate.toString(transform), // Apply transform to move the element
      }}
      className={clsx(
        "w-full h-full p-4 bg-gray-100 rounded-xl flex flex-col gap-y-4",
        isDragging && "opacity-50" // Reduce opacity while dragging
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-gray-800 font-bold text-xl">{title}</h1>{" "}
          {/* Display container title */}
          <p className="text-gray-400 text-sm">{description}</p>{" "}
          {/* Display container description */}
        </div>
        <button
          className="border bg-blue-200 p-2 text-xs rounded-xl shadow-lg hover:shadow-xl"
          {...listeners} // Add drag event listeners to the button
        >
          Drag Column
        </button>
      </div>
      {children} {/* Render child components within the container */}
      <Button variant="ghost" onClick={onAddItem}>
        {" "}
        {/* Add button to trigger adding new items */}
        Add Item
      </Button>
    </div>
  );
};

export default Container;
