
import { AiFillDelete } from "react-icons/ai";
import { MdDone, MdRemoveDone } from "react-icons/md";
import Todo from "../../pages/UserTodos/types";
import { Icon, TodoActions, TodoCardContainer, TodoTitle } from "./styles";


interface Props {
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
    
}

const TodoCard = ({ todo, todos, setTodos }: Props) => {    
    const handleDone = (id: Number) => {
        setTodos(
                todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    const handleDelete = (id: Number) => {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }

    return (
        <TodoCardContainer >                                                                   
            <TodoTitle>
             {todo.completed ? <s>{todo.title}</s> : todo.title}                                                                      
            </TodoTitle>
            <TodoActions>                
                <Icon onClick={() => handleDone(todo.id)}>
                    {todo.completed ? <MdRemoveDone /> : <MdDone />}                    
                </Icon>
                <Icon onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </Icon>
            </TodoActions>
        </TodoCardContainer>
    );
}

export default TodoCard;