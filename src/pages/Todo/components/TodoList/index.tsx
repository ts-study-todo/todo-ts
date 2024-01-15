import TodoListItem from "../TodoListItem";
import { Todo } from "../../../../@types/todo";

const TodoList: React.FC<{ todoList: Todo[] }> = ({ todoList }) => {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => {
        return <TodoListItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
};

export default TodoList;
