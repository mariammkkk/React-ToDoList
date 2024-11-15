import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'


export const Todo = ( { task, toggleComplete, deleteTodo, editTodo, moveUp, moveDown } ) => {
    return (
        <div className='Todo'>
            <p onClick={() => toggleComplete(task.id)} className={ `${ task.completed ? 'completed' : "" }` }>{ task.task }</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
                <FontAwesomeIcon icon={faArrowUp} onClick={() => moveUp(task.id)}/>
                <FontAwesomeIcon icon={faArrowDown} onClick={() => moveDown(task.id)} />
            </div>
        </div>
    )
    
}