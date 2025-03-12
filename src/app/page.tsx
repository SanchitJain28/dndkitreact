"use client"
import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy
} from '@dnd-kit/sortable';
import SortableItem from './SortableItem/page';
import Link from 'next/link';

export default function Home() {
  //makeing an array for utems //sortable items
  const [items, setItems] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17']);

  //Sensors
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    //firstly we have to use Dnd context in matter use the Dnd kit
    <div className="">
      <Link href="Dnd" className='text-3xl font-mono text-white'>Go to dnd </Link>
      <DndContext

        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        {/* //also we have to use SOrtable context */}
        <SortableContext
          items={items}
          strategy={rectSortingStrategy}
        >
          <div className="overflow-hidden grid grid-cols-3 m-4">
            {items.map((item) => {
              return <div className="m-12" key={item}>
                <SortableItem key={item} id={item} />
              </div>

            })}
          </div>

        </SortableContext>
      </DndContext>
    </div>
  );
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id.toString());
        const newIndex = over ? items.indexOf(over.id.toString()) : -1;

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}
