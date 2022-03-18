import axios from 'axios';
import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate, useParams } from "react-router-dom";
import TodosInput from '../../components/TodosInput';
import TodosList from '../../components/TodosList';
import { Title } from '../Home/styles';
import { BackButton, TodosContainer } from './styles';
import './styles.ts';
import Todo from './types';

const UserTodos = () => {
  
  const { id } = useParams();
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);  
  
  const getTodos = async () => {    
    await axios
    .get(
        `https://jsonplaceholder.typicode.com/users/${id}/todos`
        )
        .then((response) => {
          console.log(response.data);
          setTodos(response.data);          
        }).catch((error) => {
          console.error(error);
      });      
  };
  
  useEffect(() => {
    getTodos();
        
    console.log('Todos:', todos);    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), userId: Number.parseInt(id || '0'), title: todo, completed: false }]);
      setTodo('');
    }
  };
  
  const navigate = useNavigate();
  return (
    <TodosContainer>
      <BackButton onClick={() => navigate(`/`)} >
      <IconContext.Provider value={{ color: "white", style: { fontSize: '25px' }}}>
        <BiArrowBack/>
        </IconContext.Provider>
      </BackButton>
      <Title>
        <h1>Todos</h1>
      </Title>      
      <TodosInput setTodo={setTodo} todo={todo} handleAdd={handleAdd}/>        
      <TodosList todos={todos} setTodos={setTodos}/>    
  </TodosContainer>
  )
};

export default UserTodos;
