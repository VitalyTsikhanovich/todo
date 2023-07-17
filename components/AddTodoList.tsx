import {ChangeEvent, FC, memo, useCallback, useState} from "react";
import {TodoModel} from "../models/todo.model";
// @ts-ignore
import {v4 as uuidv4} from 'uuid';
import TextField from '@mui/material/TextField';
import {AddTodo} from "../assets/styles/todo.styles";
import Button from "@mui/material/Button";
type TAddTodoProps = {
    onAddTodo: (todo: TodoModel) => void;
}
export const AddTodoList: FC<TAddTodoProps> = memo(({onAddTodo}) => {
    const [title, setTitle] = useState<string>('');


    const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }, [])

    const handleAddTodoList = useCallback(() => {
        if (title.trim() !== '') {
            const newTodo = {
                id: uuidv4(),
                title: title,
                completed: false
            }
            onAddTodo(newTodo)
            setTitle('')
        }
    }, [title])

    return (
        <AddTodo>
            <TextField size="small" id="outlined-basic" label="AddTodo" variant="outlined" value={title}
                       onChange={handleInput}/>
            {/*<input type="text" value={title} onChange={handleInput} placeholder='New todo...'/>*/}
            <Button variant="outlined" onClick={handleAddTodoList} size="small">Add</Button>
            {/*<Button onClick={handleAddTodoList}>Add</Button>*/}

        </AddTodo>
    )
})
