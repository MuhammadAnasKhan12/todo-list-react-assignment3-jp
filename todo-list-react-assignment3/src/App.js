import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  let add = () => {
    setList([...list, text]);
    setText("");
  };

  let delete1 = (i) => {
    const del = list.filter((task, index) => index !== i);
    setList(del);
  };

  return (
    <div className="App">
      <div className="box">
        <h1>TODO LIST</h1>
        <input
          className="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={add}>ADD</button>
        <div className='lists'>    
        <ul>
          {list.map((task, i) => (
            <li key={i}>
              {task}
              <button onClick={() => delete1(i)}>DELETE</button>
            </li>
          ))}
          </ul>
          </div>
      </div>
    </div>
  );
}

export default App;




    


