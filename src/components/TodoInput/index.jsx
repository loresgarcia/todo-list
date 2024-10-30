import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todoSlice';

function TodoInput() {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (todoText.trim()) {
            dispatch(addTodo(todoText));
            setTodoText('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Adicionar nova tarefa"
            />
            <button onClick={handleAddTodo}>Adicionar Tarefa</button>
        </div>
    );
}

export default TodoInput;
