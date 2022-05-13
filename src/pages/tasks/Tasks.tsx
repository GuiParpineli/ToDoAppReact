import { useState, useEffect } from "react";
import '../../components/error/style.css'
import { Link } from "react-router-dom";
import { TaskNotDone } from "../../components/TaksNotDone";
import imageTodo from '/src/path12.png';
import { randomBytes } from "crypto";

export function Tasks() {
    
    return (
        <div className="mainContainer">
            <header>
                <div className="titleTasks">
                <h1>App To Do React</h1>
                </div>
                <div className="containerNewTask">
                <form action="" className="formNewTask">
                <label htmlFor="newTaks">Nova Tarefa:</label>
                <div>
                <input placeholder='Digite sua tarefa' id='newTask' type='text' />
                </div>
                <button type="button" className='btn-task'>Gravar</button>
                </form>
                </div>
            </header>
            <div className="tasksNotDone">
                <div className="cardTask">
                    <TaskNotDone 
                    key='01'
                    nameTask= 'Teste'
                    date= {new Date().toLocaleTimeString('pt-br', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                      })}
                    />
                </div>
            </div>
        </div>
    )
}