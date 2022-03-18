
import Todo from "../../pages/UserTodos/types";
import TodoCard from "../TodoCard";
import { TodosCardGrid } from "./styles";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodosList:React.FC<Props> = ({todos, setTodos}) => {
    return (        
            <TodosCardGrid>
                { todos.length ? (
                    todos.map((todo: Todo) => (
                        <TodoCard todo={todo} todos={todos} setTodos={setTodos} />
                        ))
                    ) : (
                        <h2>404 - Todos not found</h2>
                    )} 
            </TodosCardGrid>             
    )    
}

export default TodosList;