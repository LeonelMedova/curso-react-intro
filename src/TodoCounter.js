import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    const todoCounterNormal = <>Has completado <span>{completed}</span> de <span>{total}</span> TODOs</>

    return (
        <h1 className="TodoCounter">{
            total === completed 
            ? `🎆🎊🎉Felicitaciones, terminaste todos los TODOs!🎉🎊🎆` 
            : todoCounterNormal
        
        }</h1>
    )
}

export { TodoCounter };