import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/taskSlice";

export const Task = ({ task }) => {
  const dispatch = useDispatch()
  
  const handleClick = (taskId) => {
    dispatch(deleteTask(taskId))
  }

  const handleToggle = (taskId) => {
    dispatch(toggleCompleted(taskId))
  }

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={() => handleToggle(task.id)}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={() => handleClick(task.id)}>
        <MdClose size={24} />
      </button>
    </div>
  );
};