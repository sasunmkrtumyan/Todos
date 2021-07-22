import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import TodoFooter from "./components/TodoFooter";
import Header from "./components/Header";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn Css",
      isCompleted: false,
    },
  ]);
  const [filtered, setFiltered] = useState([]);
  const [filteredBy, setFilteredBy] = useState("all");

  useEffect(() => {
    if (filteredBy === "all") {
      return setFiltered([...todos]);
    }
    if (filteredBy === "complited") {
      setFiltered(
        [...todos].filter((el) => {
          return el.isCompleted === true;
        })
      );
    }
    if (filteredBy === "uncomplited") {
      setFiltered(
        [...todos].filter((el) => {
          return el.isCompleted === false;
        })
      );
    }
  }, [todos, filteredBy]);

  function ggg(params) {
    setFilteredBy(params);
  }

  function handleRemove(id) {
    setTodos([...todos].filter((todo) => todo.id !== id));
  }

  function handleAdd(text) {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        text,
        isCompleted: false,
      },
    ]);
  }

  function handleMarkCompleted(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <Header />
      <TodoInput onAdd={handleAdd} />
      <TodoList
        todos={filtered}
        handleRemove={handleRemove}
        handleMarkCompleted={handleMarkCompleted}
      />
      <TodoFooter todos={todos} setFilteredBy={setFilteredBy} ggg={ggg} />
    </div>
  );
}
