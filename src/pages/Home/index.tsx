import axios from 'axios';
import { useEffect, useState } from 'react';
import UserCard from '../../components/UserCard';
import { HomeContainer, Title, UserCardGrid } from './styles';
import User from './types';

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);  

  const getUsers = () => {    
    axios
      .get(
        "https://jsonplaceholder.typicode.com/users/"
      )
      .then((response) => {               
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <HomeContainer>
      <Title>
        <h1>Users</h1>
      </Title>
      <UserCardGrid>
      { users.length ? (
        users.map((user: User) => (
              <UserCard user={user} key={`${user.id}`} />            
              ))
            ) : (
          <h2>404 - Users not found</h2>
        )}
      </UserCardGrid>
    </HomeContainer>
  );
};

export default Home;
