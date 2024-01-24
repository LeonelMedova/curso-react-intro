import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);

    let message;
    const messageSpan = <>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs</>

    if (totalTodos === 0) {
        message = "No hay tareas pendientes.";
    } else if (totalTodos === completedTodos) {
        message = "🎉¡Felicidades, completaste todos los TODOs!🎉";
    } else {
        message = messageSpan;
    }

return <h1 className="TodoCounter">{message}</h1>;
}

export { TodoCounter };