import React, { useState } from "react";
// import { Textbox, Button } from "@material-table/core";
import TodoList from "./TodoList";
import "./../styles.css";

const AddItem = () => {
  const [item, setItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const itemHandler = (e) => {
    setItem();
    setTodoList(() => [...todoList, item]);
  };

  return (
    <div className="add_item">
      <input
        className="input-box"
        type="text"
        onChange={(e) => setItem(e.target.value)}
      />
      <button className="btn btn-primary" onClick={itemHandler}>
        Add
      </button>
      <TodoList todoList={todoList} />
    </div>
  );
};

export default AddItem;
