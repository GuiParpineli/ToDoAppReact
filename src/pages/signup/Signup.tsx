import { useState } from 'react';
import { ErrorList, ErrorProps } from '../../components/error/Error'
import './signup.css'

export function Signup() {

  type Body = {
    name: string;
    email: string;
    password: string;
  }
  const url: string = '';

  const [namelUser, setUserName] = useState('');
  const [emailUser, setUserEmail] = useState('');
  const [passwordUser, setUserPassword] = useState('');
  const [errorInput, setErrorInput] = useState('');

  function validate() {

    if ((namelUser == '') || (emailUser == '') || (passwordUser == '')){
      setErrorInput('Campo Obrigatorio')
    }else{
      setErrorInput('')
    }
  };


  const body: Body = {
    name: namelUser.trim(),
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
        <img src="src/pages/login/path12.png" width='400px' alt="" />
        <h1>App To Do</h1>
      </div>
      <div className='containerForm'>
        <form action="">

          <p>Não possui conta?
            <a href="./login"><button className='btn-signup' type='button'>Login</button></a>
          </p>

          <h1>Cadastra-se:</h1>

          <div>
            <label htmlFor='name'>Nome:</label>
            <input
              id='name'
              type='text'
              placeholder='Digite seu nome'
              onChange={e => setUserName(e.target.value)}
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
          </div>

          <div>
            <label htmlFor='password'>Senha:</label>
            <input
              id='password'
              type='password'
              placeholder='Digite sua sennha'
              onChange={e => setUserPassword(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='passwordConfirm'>Repetir Senha:</label>
            <input
              id='passwordConfirm'
              type='password'
              placeholder='Repita sua sennha'
            />
          </div>

          < ErrorList
            desc={errorInput}
          />

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

