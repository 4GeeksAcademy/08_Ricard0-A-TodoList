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
    // _, i Quiere decir que no quiero usar el unit, index del metodo Filter 
    // Solo quiero usar el index, o abreviado ( I ) 
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="recuadro">
        <ul>
          <li>
            <input
              // Valor actual del input (Posteriormenete cambiara dinamicamente) que viene del useState
              value={inputValue}
              type="text"
              placeholder="What needs to be done?"
              onChange={(ev) => {
                // Actualice el valor de inputValue y esto tambien afecta al valor actual del input
                // ev es el evento origen de onChange, osea la accion de escribir luego .target luego .value 
                // Se entiende
                setInputValue(ev.target.value);
              }}
              onKeyUp={(ev) => {
                // Si el evento origen.key (Lo que presiono) es === True...
                if (ev.key === "Enter") {
                  if (inputValue.trim()) {
                    setTodos(todos.concat(inputValue));
                    setInputValue("");
                  }
                }
              }}
            />
          </li>
          {/* metodo Map para iterar el array de todos que se ha ido llenando con los useState y los event listeners */}
          {/* Poner el key = al index es obligatorio para que EL DOM identifique cada Li */}
          {todos.map((t, index) => (
            <li 
              key={index} 
              style={flexy} 
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)} 
            >
              {t}
              <i            
                onClick={() => handleDelete(index)} // Que tarea va a borrar el handle Delete? La del index actual al momento de iterar (index de la tarea actual) 
                className="fa-solid fa-x"
                style={{ opacity: hoveredIndex === index ? 1 : 0 }}
              ></i>
            </li>
          ))}
          <span>{todos.length} Item left</span>
        </ul>
        
      <div>

      </div>
      
      </div>
      
    </div>
  );
};

export default App;