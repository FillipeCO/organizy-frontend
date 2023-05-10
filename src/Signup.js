import {useState} from 'react';
import axios from 'axios';


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
            <header className="Signup-header">
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:
                        <input type="text" name="name" value={name} onChange={handleNameChange} />
                    </label>
                    <label>
                        Celular:
                        <input type="text" name="cellphone" value={cellphone} onChange={handleCellphoneChange} />
                    </label>
                    <label>
                        Data de nascimento:
                        <input type="text" name="birthdate" value={birthdate} onChange={handleBirthdateChange} />
                    </label>
                    <label>
                        CPF:
                        <input type="text" name="cpf" value={cpf} onChange={handleCpfChange} />
                    </label>
                    <label>
                        CEP:
                        <input type="text" name="cep" value={cep} onChange={handleCepChange} />
                    </label>
                    <label>
                        Estado:
                        <input type="text" name="state" value={state} onChange={handleStateChange} />
                    </label>
                    <label>
                        Cidade:
                        <input type="text" name="city" value={city} onChange={handleCityChange} />
                    </label>
                    <input type="submit" value="Cadastrar" />
                </form>
            </header>
        </div>
    );
}

export default Signup;
