import { useRef } from "react";
import { InputButton, TodoInput } from "./styles";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const TodosInput:React.FC<Props> = ({ todo, handleAdd, setTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null); 

    return (
        <form onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur();
        }}>
          <TodoInput
            ref={inputRef}
            type='input'
            placeholder='Add a task...'
            className='input__box'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <InputButton type='submit'>Go</InputButton>
        </form>
      )
}

export default TodosInput;