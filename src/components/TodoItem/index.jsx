import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../../features/todoSlice';

function TodoItem({ todo }) {
    const dispatch = useDispatch();

    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
    );
}

export default TodoItem;
