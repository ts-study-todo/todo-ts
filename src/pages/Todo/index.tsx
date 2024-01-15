import { useState, useEffect } from "react";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Todo } from "../../@types/todo";

const TodoPage: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5173/data/data.json", {
          method: "GET",
        });
        const data = await res.json();
        setTodoList(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // const [todoList, setTodoList] = useState([
  //   {
  //     id: 1,
  //     value: "내용",
  //     isCompleted: false,
  //   },
  // ]);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoInput />
      </header>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList todoList={todoList} />
      </section>
      <footer className="footer">
        <span className="todo-count">3</span>
      </footer>
    </section>
  );
};

export default TodoPage;
