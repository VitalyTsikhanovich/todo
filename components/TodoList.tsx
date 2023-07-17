import {ChangeEvent, FC, memo, useCallback, useState} from "react";
import {Todo} from "./Todo";
import {TodoModel} from "../models/todo.model";
import {TaskCounter} from "./TaskCounter";
import {AddTodoList} from "./AddTodoList";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {AddTodoContainer, TodoListContainer} from "../assets/styles/todo.styles";
import {Paper} from "@mui/material";

export const TodoList: FC = memo(() => {

    const [tasks, setTasks] = useState<TodoModel[]>([
        {
            "id": "51c1c4f1-03bf-48bf-9705-9dc97ab61a76",
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "id": "62aabce1-8f84-4684-90b9-2b2310cf726a",
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "id": "402ee516-6c72-4d16-a9a8-322069f5cf6e",
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "id": "3b720eaf-163a-41c8-bc5e-b47f2370cd0c",
            "title": "et porro tempora",
            "completed": true
        },
        {
            "id": "3ab57b63-e789-4211-a507-6b89501bc39a",
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "id": "09d15f18-14ea-4fd3-b75b-e57777c25b3c",
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
        {
            "id": "46f5bdd5-dc22-441e-b78b-e812d817cfde",
            "title": "illo expedita consequatur quia in",
            "completed": false
        },
        {
            "id": "bce9f1e0-4383-40a6-9a10-2f59d9aa1465",
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
        {
            "id": "05da3453-89e2-4d44-8912-5b727218808c",
            "title": "molestiae perspiciatis ipsa",
            "completed": false
        },
        {
            "id": "c7034df3-eb7b-4cad-a323-3f5c6ceb9283",
            "title": "illo est ratione doloremque quia maiores aut",
            "completed": true
        }

    ])
    const [filter, setFilter] = useState<string>('all')
    const [searchValue, setSearchValue] = useState<string>("")


    const filteredTasks = tasks.filter(task => {
        return (
            task.title.toLowerCase().includes(searchValue.toLowerCase()) &&
            ((filter === "active" && !task.completed) ||
                (filter === "completed" && task.completed) ||
                filter === "all")
        );
        // task.title.toLowerCase().includes(searchValue.toLowerCase())
        // if (filter === "active") {
        //     return !task.completed;
        // } else if (filter === "completed") {
        //     return task.completed;
        // } else {
        //     return true;
        // }
    });
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    }
    const addTodo = useCallback((newTodo: TodoModel) => {
        setTasks((e) => [newTodo, ...e])
    }, [])

    const handleDelete = useCallback((id: string) => {

        setTasks(t => t.filter(task => task.id !== id))

    }, [])
    const handleEdit = (id: string, title: string) => {
        setTasks(t =>
            t.map(todo => (todo.id === id ? {...todo, title} : todo))
        );
    }

    return (

        <TodoListContainer>

            <Paper elevation={3}>
                <AddTodoContainer>

                    <AddTodoList onAddTodo={addTodo}/>
                    <div>
                        <ButtonGroup variant="outlined" aria-label="outlined button group" size="small">
                            <Button variant={filter === 'all' ? 'contained' : 'outlined'} style={{fontSize: '10px'}}
                                    onClick={() => {
                                        setFilter('all')
                                    }}>Show All Tasks</Button>
                            <Button variant={filter === 'active' ? 'contained' : 'outlined'} style={{fontSize: '10px'}}
                                    onClick={() => {
                                        setFilter('active')
                                    }}>Show Active Tasks</Button>
                            <Button variant={filter === 'completed' ? 'contained' : 'outlined'}
                                    style={{fontSize: '10px'}} onClick={() => {
                                setFilter('completed')
                            }}>Show completed Tasks</Button>
                        </ButtonGroup>
                    </div>

                </AddTodoContainer>
            </Paper>
            <TaskCounter todo={filteredTasks}/>

            {/*<button onClick={showAll}>Show All Tasks</button>*/}
            {/*<button onClick={showActive} >Show Active Tasks</button>*/}
            {/*<button onClick={showCompleted}>Show completed Tasks</button>*/}
            <input
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Поиск задач..."
            />
            {filteredTasks.map(t => (
                <Todo key={t.id} todo={t} onDelete={handleDelete} onEdit={handleEdit}/>
            ))}
        </TodoListContainer>


    )
})
