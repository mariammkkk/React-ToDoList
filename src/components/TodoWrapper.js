import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import  { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (todo.trim() !== "") {
            setTodos([...todos, {id: uuidv4(), task: todo,
            completed: false, isEditing: false}])
            console.log(todos)
        }
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    const moveUp = (id) => {
        const index = todos.findIndex(todo => todo.id === id);
        if (index > 0) {
            const updatedTodos = [...todos];
            // Swap elements
            const temp = updatedTodos[index];
            updatedTodos[index] = updatedTodos[index-1];
            updatedTodos[index - 1] = temp;
            // Update
            setTodos(updatedTodos);
        }
    }

    const moveDown = (id) => {
        const index = todos.findIndex(todo => todo.id === id);
        if (index < todos.length - 1) {
            const updatedTodos = [...todos];
            // Swap elements
            const temp = updatedTodos[index];
            updatedTodos[index] = updatedTodos[index+1];
            updatedTodos[index + 1] = temp;
            // Update
            setTodos(updatedTodos);
        }
    }


    return (
        <div className='TodoWrapper'>
            <h1>To-Do List:</h1>
            <TodoForm addTodo={addTodo} />

            {todos.map((todo, index) => (

                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <Todo task={todo} key={index} 
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo} 
                    moveUp={moveUp}
                    moveDown={moveDown}
                    />
                )

            ))}
        </div>
    )
    
}