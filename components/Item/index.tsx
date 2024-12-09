import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";

type ItemsType = {
  id: UniqueIdentifier;
  title: string;
};

const Items = ({ id, title }: ItemsType) => {
  const {
    // The hook provides necessary properties for sortable behavior
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "item",
    },
  });

  return (
    <div
      // This ref connects the DOM element to the DnD library for sorting functionality
      ref={setNodeRef}
      {...attributes}
      style={{
        // Apply the CSS transform based on the sortable item’s state
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        "px-2 py-4 shadow-md rounded-xl w-full border border-transparent hover:border-gray-200 cursor-pointer",
        // This class makes the item semi-transparent while being dragged
        isDragging && "opacity-50"
      )}
    >
      <div className="flex items-center justify-between">
        {title}
        <button
          className="border bg-purple-200 p-2 text-xs rounded-xl shadow-lg hover:shadow-xl"
          // The listeners make the button draggable
          {...listeners}
        >
          Drag Task
        </button>
      </div>
    </div>
  );
};

export default Items;
