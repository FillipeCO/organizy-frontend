import {useState} from 'react';
import axios from 'axios';
import './Signup.css';


const Signup = () => {
  const [name, setName] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');


    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleCellphoneChange(event) {
        setCellphone(event.target.value);
    }

    function handleBirthdateChange(event) {
        setBirthdate(event.target.value);
    }

    function handleCpfChange(event) {
        setCpf(event.target.value);
    }

    function handleCepChange(event) {
        setCep(event.target.value);
    }

    function handleStateChange(event) {
        setState(event.target.value);
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3333/user', {
            name: name,
            cellphone: cellphone,
            birthdate: birthdate,
            cpf: cpf,
            cep: cep,
            state: state,
            city: city
        })
        .then(function (response) {
            console.log(response);
            window.location.href = '/login';
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return (
        <div className="Signup">
            <header className="Signup-header"></header>


<div class="container">

    <form className="form" onSubmit={handleSubmit}>

        <h1>Faça seu cadastro</h1>

        <div class="input-control">

            <label for="username">Nome Completo</label>

            <input id="username" name="username" type="text" onChange={handleNameChange}></input>

            <div class="error"></div>

        </div>

        <div class="input-control">

            <label for="cpf">CPF</label>

            <input id="cpf" name="cpf" type="number" onChange={handleCpfChange}></input>

            <div class="error"></div>

        </div>

        <div class="input-control">

            <label for="nascimento">Data de nascimento</label>

            <input id="nascimento" name="nascimento" type="date" onChange={handleBirthdateChange}></input>

            <div class="error"></div>

        </div>

        <div class="input-control">

            <label for="telefone">Telefone</label>

            <input id="telefone" name="telefone" type="number" onChange={handleCellphoneChange}></input>

            <div class="error"></div>

        </div>

        <div class="input-control">

            <label for="cep">CEP</label>

            <input id="cep" name="cep" type="number" onChange={handleCepChange}></input>

            <div class="error"></div>

        </div>

        <div class="input-control">

            <label for="estado">Estado</label>

            <input id="estado" name="estado" type="text" onChange={handleStateChange}></input>

            <div class="error"></div>

        </div>

        <div class="input-control">

            <label for="estado">Cidade</label>

            <input id="cidade" name="cidade" type="text" onChange={handleCityChange}></input>

            <div class="error"></div>

        </div>

        <button className='button' type="submit">Cadastrar</button>

    </form>

</div>

</div>



    );
}

export default Signup;
