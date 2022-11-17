import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Container from "./components/container";
import { data } from "./data.js";
import "./style.css";

function ReorderableItems() {
  const listAscending = [...data].sort((a, b) => a.order - b.order);

  const [list, setList] = useState(listAscending);

  function reorderNumbers(result) {
    const startIndex = result?.source?.index;
    const endIndex = result?.destination?.index;

    setList((lists) => {
      const nums = [...lists];
      const [removed] = nums?.splice(startIndex, 1);
      nums.splice(endIndex, 0, removed);
      return nums;
    });
  }

  return (
    <>
      <h2 className='title'>Order Your Favorite Langue</h2>
      <DragDropContext onDragEnd={reorderNumbers}>
        <Droppable droppableId='droppable'>
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Container isDragging={snapshot.isDragging}>
                {list.map((num, i) => {
                  return (
                    <Draggable
                      key={num.id}
                      draggableId={num.id.toString()}
                      index={i}
                    >
                      {(provided, snapshot) => (
                        <div
                          className='list-item'
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          variant={
                            snapshot.isDragging ? "elevation" : "outlined"
                          }
                          elevation={4}
                        >
                          {num.text}
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </Container>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default function App() {
  return (
    <div className='App'>
      <ReorderableItems />
    </div>
  );
}
