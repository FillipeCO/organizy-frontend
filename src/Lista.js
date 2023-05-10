import {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

const Lista = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3333/users')
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    }, [])
  
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Organizy</h1>
          <p>Usuários cadastrados:</p>
          <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
          </ul>
        </header>
  
     </div>
    );
  }
  
  export default Lista;