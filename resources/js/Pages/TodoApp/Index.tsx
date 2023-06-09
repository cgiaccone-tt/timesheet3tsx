import { useEffect, useState, useRef } from 'react';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useLocalStorage from '../../hooks/useLocalStorage';
import '../../../css/TodoReset.css';
import '../../../css/TodoApp.css';
import { TodosContext } from '../../Context/TodosContext';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Todo } from './interfaces';

function TodoApp(): React.JSX.Element {
    const [name, setName] = useLocalStorage('name', '');

    const nameInputEl = useRef<HTMLInputElement>(null);
    const [todos, setTodos] = useLocalStorage('todos', []);

    const [idForTodo, setIdForTodo] = useLocalStorage('idForTodo', 1);

    const [filter, setFilter] = useState('all');

    function todosFiltered() {
        if (filter === 'all') {
            return todos;
        } else if (filter === 'active') {
            return todos.filter((todo: Todo) => !todo.isComplete);
        } else if (filter === 'completed') {
            return todos.filter((todo:Todo) => todo.isComplete);
        }
    }

    useEffect(() => {
        // console.log('use effect running');
        if (nameInputEl.current !== null)
        {
          nameInputEl.current.focus();
        }
        

        // setName(JSON.parse(localStorage.getItem('name')) ?? '');

        return function cleanup() {
            // console.log('cleaning up');
        };
    }, []);

    function handleNameInput(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
        // localStorage.setItem('name', JSON.stringify(event.target.value));
    }

    return (
        <TodosContext.Provider
            value={{
                todos,
                setTodos,
                idForTodo,
                setIdForTodo,
                todosFiltered,
                filter,
                setFilter,
            }}
        >
                <div className="todo-app">
                    <div className="name-container">
                        <h2>What is your nameAAAA?</h2>
                        <form action="#">
                            <input
                                type="text"
                                ref={nameInputEl}
                                className="todo-input"
                                placeholder="What is your name"
                                value={name}
                                onChange={handleNameInput}
                            />
                        </form>

            <CSSTransition
              in={name.length > 0}
              timeout={300}
              classNames="slide-vertical"
              unmountOnExit
            >
              <p className="name-label">Hello, {name}</p>
            </CSSTransition>
                    </div>
                    <h2>Todo App</h2>
                    <TodoForm />

          <SwitchTransition mode="out-in">
            <CSSTransition
              key={todos.length > 0}
              timeout={300}
              classNames="slide-vertical"
              unmountOnExit
            >
                    {todos.length > 0 ? <TodoList /> : <NoTodos />}
            </CSSTransition>
          </SwitchTransition>

          {/* <CSSTransition
            in={todos.length > 0}
            timeout={300}
            classNames="slide-vertical"
            unmountOnExit
          >
            <TodoList />
          </CSSTransition>

          <CSSTransition
            in={todos.length === 0}
            timeout={300}
            classNames="slide-vertical"
            unmountOnExit
          >
                    <NoTodos />
          </CSSTransition> */}
            </div>
    </TodosContext.Provider>
    );
}

export default TodoApp;
