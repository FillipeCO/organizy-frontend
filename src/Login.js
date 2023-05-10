import {useState} from 'react';
import axios from 'axios';

const Login = () => {

    const [cpf, setCpf] = useState('');
    
    function handleCpfChange(event) {
        setCpf(event.target.value);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3333/user/login', {
        cpf: cpf
        })
        .then(function (response) {
        localStorage.setItem('userId', response.data._id);
        console.log(response);
        window.location.href = '/home';
        })
        .catch(function (error) {
        console.log(error);
        })
    }
    
    return (
        <div className="App">
        <header className="App-header">
            <h1>Organizy</h1>
            <p>Login</p>
            <form onSubmit={handleSubmit}>
            <label>
                CPF:
                <input type="password" name="password" onChange={handleCpfChange} />
            </label>
            <input type="submit" value="Entrar" />
            </form>
        </header>
    
     </div>
    );
    }

export default Login;