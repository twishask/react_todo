import React, {useState, useEffect, useRef} from 'react';
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
  //    setInputDisabled(!isInputDisabled)
    }
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        Todo
        <button onClick={() => setInputDisabled(!isInputDisabled)}>+</button>
      </header>
      <ul>
      {todoList.map(todo=>{
        return <li>
                {todo}
              </li>
      })}
      <li>
        <input type="text" ref={inputEl} disabled={isInputDisabled} value={inputValue} onChange={handleInputChange} onKeyPress={addItem} />
      </li>
      </ul>
    </div>
  );
}

export default App;
