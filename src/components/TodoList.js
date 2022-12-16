import React from "react";
import "./../styles.css";

const TodoList = (prop) => {
  const { todoList } = prop;
  return (
    <div className="list_display">
      <ul className="order">
        {todoList.map((elem, index) => (
          <div className="list_item">
            <li className="element" key={index}>
              {elem}
            </li>
            <button className="BtnDen">Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
