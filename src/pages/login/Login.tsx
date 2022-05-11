import { useState } from 'react'
import './login.css'
import imageTodo from '/src/path12.png';

export function Login() {

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
            <a href="/signup"><button className='btn-signup' type='button'>Cadastrar</button></a>
          </p>
          <h1>Faça Login:</h1>

          <div>
            <label htmlFor='email'>Email:</label>
            <input
              id='email'
              type='email'
              placeholder='Digite seu email'>
            </input>

          </div>
          <div>
            <label htmlFor='password'>Senha:</label>
            <input
              id='password'
              type='password'
              placeholder='Digite sua sennha'>
            </input>
          </div>
          <div className='btn-submit'>
            <button type='submit'>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}


