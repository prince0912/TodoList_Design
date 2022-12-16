import "./styles.css";
import AddItem from "./components/Add_item";

export default function App() {
  return (
    <div className="App">
      <div>
        <nav className="navbar">
          <ul className="list">
            <li className="logo">MyToDo</li>
            <li className="Title">Todo</li>
          </ul>
        </nav>
      </div>
      <div>
        <AddItem />
      </div>
    </div>
  );
}
