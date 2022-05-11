import { useState, useEffect } from 'react';
import { ErrorList, ErrorProps } from '../../components/error/Error'
import './signup.css'
import imageTodo from '/src/path12.png';



export function Signup() {

  type Body = {
    name: string;
    email: string;
    password: string;
  }
  const url: string = '';

  const [nameUser, setUserName] = useState<string>('');
  const [emailUser, setUserEmail] = useState<string>('');
  const [passwordUser, setUserPassword] = useState<string>('');
  const [errorInput, setErrorInput] = useState<ErrorProps>({} as ErrorProps);

  function validate() {

    nameUser === '' ? setErrorInput(prevState => ({ ...prevState, name: 'Campo Obrigatorio' })) : setErrorInput({ name: '' })

    emailUser === '' ? setErrorInput(prevState => ({ ...prevState, email: 'Campo Obrigatorio' })) : setErrorInput({ email: '' })

    passwordUser === '' ? setErrorInput(prevState => ({ ...prevState, password: 'Campo Obrigatorio' })) : setErrorInput({ password: '' })

  };

  const body: Body = {
    name: nameUser.trim(),
    email: emailUser.trim(),
    password: passwordUser.trim(),
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

          <p>Não possui conta?
            <a href="./"><button className='btn-signup' type='button'>Login</button></a>
          </p>

          <h1>Cadastre-se:</h1>

          <div>
            <label htmlFor='name'>Nome:</label>
            <input
              id='name'
              type='text'
              placeholder='Digite seu nome'
              onChange={e => setUserName(e.target.value)}
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

