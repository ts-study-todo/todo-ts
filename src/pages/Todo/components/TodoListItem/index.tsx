import { Todo } from "../../../../@types/todo";

const TodoListItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const { value, isCompleted } = todo;

  return (
    <li className={isCompleted ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{value}</label>
        <button className="destroy"></button>
      </div>
      {/* 
        label을 더블 클릭하면 title을 변경할 수 있는 input창을 출력해야 한다.
        <input class="edit" />
        input.edit가 포커스를 잃거나 Enter키를 누르면 작성한 title로 변경되고, input.edit창을 제거한다.
      */}
    </li>
  );
};

export default TodoListItem;
