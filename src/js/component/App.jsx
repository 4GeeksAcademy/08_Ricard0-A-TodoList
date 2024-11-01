import React from "react";
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null); 

  const flexy = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center' 
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="recuadro">
        <ul>
          <li>
            <input
              value={inputValue}
              type="text"
              placeholder="What needs to be done?"
              onChange={(ev) => {
                setInputValue(ev.target.value);
              }}
              onKeyUp={(ev) => {
                if (ev.key === "Enter") {
                  if (inputValue.trim()) {
                    setTodos(todos.concat(inputValue));
                    setInputValue("");
                  }
                }
              }}
            />
          </li>

          {todos.map((t, index) => (
            <li 
              key={index} 
              style={flexy} 
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)} 
            >
              {t}
              <i 
                onClick={() => handleDelete(index)} 
                className="fa-solid fa-x"
                style={{ opacity: hoveredIndex === index ? 1 : 0 }}
              ></i>
            </li>
          ))}
          <span>{todos.length} Item left</span>
        </ul>
        
      </div>
      
    </div>
  );
};

export default App;