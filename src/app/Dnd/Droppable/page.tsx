"use client"
import React from 'react'
import { useDroppable } from '@dnd-kit/core';
import { DraggableProps } from '../Draggable/page';
export default function Droppable(props:DraggableProps) {
    //What is a Droppable
    //  It is a area where you can drop container which are known as draggables which can be dargged into the container which is called a droppable conatiner

    //Use the useDroppable hook to set up DOM nodes as droppable areas that draggable elements can be dropped over.
    const {isOver, setNodeRef } = useDroppable({
        id: props.id,
    });
    const style = {
        color: isOver ? 'green' : undefined,
      };
     
    return (
        <div  style={style} ref={setNodeRef} >
            <div className="py-20 border-zinc-400 border rounded m-8">
               {props.children}
            </div>
        </div>
    )
    
}
