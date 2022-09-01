import React from "react";
import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { ContentTodo } from "./ContentTodo";
import { TargetTodo } from "./TargetTodo";

const defaultTodos = [
  { text: "📌Completar Navbar", completed: false },
  { text: "📌Realizar Commits", completed: false },
  { text: "📌Desplegar App", completed: false },
  { text: "📌Estilizar Componentes", completed: false },
  { text: "📌Hacer Merge", completed: false },
  { text: "📌Arreglar Header", completed: false },
];

function App() {
  //Declaración de estado

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  
  //funcion para filtrar los objetos del array que tengas el atributo completed

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  // funcion para encontrar arrays con las mismas letras ingresadas

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //Funcion para marcar el todo como completado

  const completeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);//se busca la posicion del index del todo 
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;//marca la propiedad completed del objeto como true
    setTodos(newTodos);
  }

  //Funcion para eliminar el TODO del array

  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);//se busca la posicion del index del todo 
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);//con splice extraemos el objeto de nuestro array
    setTodos(newTodos);
  }

  return (
    <ContentTodo>
      <TargetTodo>
        <TodoCounter

          total={totalTodos}
          completed={completedTodos}
          
        />
        
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </TargetTodo>
    </ContentTodo>
  );
}

export default App;
