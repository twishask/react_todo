import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const inputEl = useRef(null);
  const [todoList, setTodoList] = useState([])
  const [isInputDisabled, setInputDisabled] = useState(true)
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    inputEl.current.focus();
  },[isInputDisabled]);

  const addItem = (e) => {
    if (e.key === "Enter"){
      console.log(e.target.value);
      setTodoList([...todoList, e.target.value])
      setInputValue("")
      setInputDisabled(!isInputDisabled)
    }
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
      <h3>Todo</h3>
      <button onClick={() => setInputDisabled(!isInputDisabled)}>+</button>
      </header>
      <input type="text" ref={inputEl} disabled={isInputDisabled} value={inputValue} onChange={handleInputChange} onKeyPress={addItem} />
      {todoList.map(todo=>{
        return <div>
                {todo}
              </div>
      })}
    </div>
  );
}

export default App;
