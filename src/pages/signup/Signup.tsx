import { useState, useEffect } from 'react';
import { ErrorList, ErrorProps } from '../../components/error/Error'
import './../login/login.css'
import imageTodo from '/src/path12.png';
import {
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";


export function Signup() {

  type Body = {
    name: string;
    email: string;
    password: string;
  }
  const url: string = '';

  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [errorInput, setErrorInput] = useState<ErrorProps>({} as ErrorProps);


  function validate() {
    let regExpName = /^([A-z]+[ ]+[A-z]|[A-z])+$/i;
    let regExpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/gm;

    if (userName.trim() === '') {
      setErrorInput(prevState => ({ ...prevState, name: 'Campo Obrigatorio' }))
    }

    if (userEmail.trim() === '') {
      setErrorInput(prevState => ({ ...prevState, email: 'Campo Obrigatorio' }))
    }
    if (userPassword.trim() === '') {
      setErrorInput(prevState => ({ ...prevState, password: 'Campo Obrigatorio' }))
    }
    else if (!regExpName.test(userName)) {
      setErrorInput(prevState => ({ ...prevState, name: 'Nome contem caracteres invalidos' }))
    }
    else if (!regExpPassword.test(userPassword)) {
      setErrorInput(prevState => ({ ...prevState, password: 'Senha precisa ter no minimo: 1 Maiscula, 1 Minuscula, 1 caractere especial e 8 digitos ao menos' }))
    }
    else {
      setErrorInput({ name: '', email: '', password: '' })
    };
  }

  const body: Body = {
    name: userName.trim(),
    email: userEmail.trim(),
    password: userPassword.trim(),
  };

  /*  fetch(url, {
     method: 'POST',
     headers: {'Content-Type': 'aplication/JSON'},
     body: {body}
   }),
   .then(res => res.JSON())
   .then( data => console.log(data))
   .catch( err => console.error(err)) */

  return (
    <div className="App">
      <div className='imgContainer'>
        <img src={imageTodo} width='400px' alt="" />
        <h1>App To Do</h1>
        <p>Suas Tarefas Organizadas</p>
      </div>
      <div className='containerForm'>
        <form action="">
          <div className='mobileTitle'>
            <h1 >App To Do</h1>
            <p>Suas Tarefas Organizadas</p>
          </div>
          <p>Não possui conta?
            <Link to='/ToDoAppReact/'><button className='btn-login' type='button'>Login</button></Link>
          </p>

          <h1>Cadastre-se:</h1>

          <div>
            <label htmlFor='name'>Nome:</label>
            <input
              id='name'
              type='text'
              placeholder='Digite seu nome'
              onChange={e => setUserName(e.target.value)}
              onBlur={a => a}
            />
            < ErrorList
              name={errorInput.name}
            />
          </div>

          <div>
            <label htmlFor='email'>Email:</label>
            <input
              id='email'
              type='email'
              placeholder='Digite seu email'
              onChange={e => setUserEmail(e.target.value)}
            />
            < ErrorList
              email={errorInput.email}
            />
          </div>

          <div>
            <label htmlFor='password'>Senha:</label>
            <input
              id='password'
              type='password'
              placeholder='Digite sua sennha'
              onChange={e => setUserPassword(e.target.value)}
            />
            < ErrorList
              password={errorInput.password}
            />
          </div>

          <div>
            <label htmlFor='passwordConfirm'>Repetir Senha:</label>
            <input
              id='passwordConfirm'
              type='password'
              placeholder='Repita sua sennha'
            />
            < ErrorList
              passwordConfirm={errorInput.passwordConfirm}
            />
          </div>


          <div className='btn-submit'>
            <button
              onClick={validate}
              type='button'
            >Enviar
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

