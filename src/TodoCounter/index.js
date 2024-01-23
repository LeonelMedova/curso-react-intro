import React from "react";
import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
    let message;
    const messageSpan = <>Has completado <span>{completed}</span> de <span>{total}</span> TODOs</>

    if (total === 0) {
        message = "No hay tareas pendientes.";
    } else if (total === completed) {
        message = "🎉¡Felicidades, completaste todos los TODOs!🎉";
    } else {
        message = messageSpan;
    }

return <h1 className="TodoCounter">{message}</h1>;
}

export { TodoCounter };