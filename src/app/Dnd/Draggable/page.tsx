import React from 'react'
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
export interface DraggableProps {
    id: string;
    children: React.ReactNode;
}

export default function Draggable(props: DraggableProps) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.id,
    });
    const style = {
        transform: CSS.Translate.toString(transform),
    };
    //What is a Draggable
    //  It is a container which you can drop in a droppable conatiner where it stores the containers ,for ex draggable is a car and parking is droppable where you can park many vechiles , here you can drop many containers(Draggable )
    // into a Big conatiner (Droppable)

    // Use the useDraggable hook turn DOM nodes into draggable sources that can be picked up, moved and dropped over droppable containers.
    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <div className="py-8 border-zinc-400 border w-60 my-4 rounded">
                {props.children}
            </div>
        </div>
    )
}
