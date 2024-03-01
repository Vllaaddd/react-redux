import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "../../redux/tasks/constants";
import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { selectFiltersStatus } from "../../redux/tasks/selectors";
import { changeFilter } from "../../redux/tasks/filterSlice";

export const StatusFilter = () => {
  const filter = useSelector(selectFiltersStatus)
  const dispatch = useDispatch()

  const handleToggle = (value) => {
    dispatch(changeFilter(value))
  }
  
  return (
    <div className={css.wrapper}>
      <Button selected={filter===statusFilters.all} onClick={() => handleToggle(statusFilters.all)}>All</Button>
      <Button selected={filter===statusFilters.active} onClick={() => handleToggle(statusFilters.active)}>Active</Button>
      <Button selected={filter===statusFilters.completed} onClick={() => handleToggle(statusFilters.completed)}>Completed</Button>
    </div>
  );
};