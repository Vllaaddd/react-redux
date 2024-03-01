import { AppBar } from "../components/AppBar/AppBar";
import { TaskForm } from "../components/TaskForm/TaskForm";
import { TaskList } from "../components/TaskList/TaskList";

export default function Tasks(){
    return(
        <>
            <AppBar />
            <TaskForm />
            <TaskList />
        </>
    )
}