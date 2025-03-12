import React from 'react'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface SortableProps {
    id: string
}
export default function SortableItem({ id }:SortableProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className='overflow-hidden'>
            <div className="border p-4 rounded-xl my-4 ">
                <p className='text-xl text-white font-mono'>This is a sortable item {id}</p>
            </div>

        </div>
    )
}
