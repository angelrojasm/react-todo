import logo from './logo.svg';
import TaskList from './components/TaskList'
import './css/App.css'
import { useState } from 'react';

function App() {
  const [taskArr, setTaskArr] = useState([])
  const [inputText,setInputText] = useState('')

  function deleteItem(text) {
    let newArr = taskArr.filter( element => element !== text)
    setTaskArr(newArr)
  }

  function addTodo() {
    let newArr = taskArr;
    newArr.unshift(inputText)
    setTaskArr(newArr)
    setInputText('')
  }

  return (
    <div id="app">
      <div id="header">
        <div id="header-content">
          <h2>React TODO</h2>
          <img id="logo" src={logo} alt="logo"/>
        </div>
      </div>
      <div id="main">
        <div className="title">
          <h2>TODO APP</h2>
        </div>
        <div id="task-input-bar">
          <div className="task-input">
              <input
                type="text"
                name="task-input"
                id="task"
                placeholder="What do you plan to do?"
                value={inputText}
                onChange={(e) => {setInputText(e.target.value)}}
              />
              <button onClick={addTodo} id="task-button">
                ADD
              </button>
            </div>
        </div>
        <TaskList TaskArr={taskArr} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
