import {useState} from 'react';
import axios from 'axios';
import './Login.css';

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
        <div class="container">
        <form id="form" onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>
            <div class="input-control">
                <label for="cpf">CPF</label>
                <input id="cpf" name="cpf" type="text" onChange={handleCpfChange}></input>
                <div class="error"></div>
            </div>
            <button type="submit">Logar</button>
            <p>Não possui cadastro? <a href="/cadastro">Cadastre-se aqui</a></p>
        </form>
    </div>
    );
    }

export default Login;