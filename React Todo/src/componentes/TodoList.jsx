import TodoItem from "./TodoItem";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const TodoList = ({ todos, handleUpdate, handleRemove }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvider) => (
                <div ref={droppableProvider.innerRef} {...droppableProvider.droppableProps} className="mt-8 rounded-t-md bg-white [&>article]:p-4">
                    {todos.map((todo, index) => (
                        <Draggable  key={todo.id} index={index} draggableId={`${todo.id}`}>
                             {(draggableProvider) => (
                                <TodoItem
                                    todo={todo}
                                    handleUpdate={handleUpdate}
                                    handleRemove={handleRemove}
                                    ref={draggableProvider.innerRef}
                                    {...draggableProvider.draggableProps}
                                    {...draggableProvider.dragHandleProps}
                                />
                             )}
                        </Draggable>
                        ))}
                    {droppableProvider.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TodoList;
