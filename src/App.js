import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([])

  const addItem = (e) => {
    if (e.key === "Enter"){
      console.log(e.target.value);
      setTodoList([...todoList, e.target.value])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <input type="text" onKeyPress={(e) => addItem(e)} />
      {todoList.map(todo=>{
        return <div>
                {todo}
              </div>
      })}
    </div>
  );
}

export default App;
