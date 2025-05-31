import { useEffect, useState } from 'react';
import './style.css';
import { Joke } from '../../components/Joke/joke.jsx'

export const HomePage = () => {
const [users, setUsers] = useState([])

useEffect(()=> {
  const results = async () => {
    const response = await fetch('http://localhost:4000/api/user')
    const json = await response.json()
    setUsers(json.data)
  }
  results()
}, [])

  return (
<>
    {users.map(user => (
      <Joke
      key={user.id}
      userAvatar={user.avatar}
      userName={user.name}
      text={user.text}
      likes={user.likes}
      dislikes={user.dislikes}
      />
    ))}
</>
  );
}


