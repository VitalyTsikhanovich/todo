import {ChangeEvent, FC, memo, useCallback, useState} from "react";
import {TodoModel} from "../models/todo.model";
import {Container, TodoBtnContainer} from "../assets/styles/todo.styles";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import {IconButton, Paper} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

type TodoType = {
    todo: TodoModel
    onDelete: (id: string) => void
    onEdit: (id: string, title: string) => void
}

export const Todo: FC<TodoType> = memo(({todo, onDelete, onEdit}) => {
    const [completed, setCompleted] = useState<boolean>(todo.completed);
    const [edit, setEdit] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(todo.title)
    const handleCheckboxChange = () => {
        setCompleted(e => !e)
    }
    const handleDelete = useCallback(() => {
        onDelete(todo.id)
    }, [onDelete, todo.id])

    const handleEdit = () => {
        setEdit(true)
    }
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const close = () => {
        setEdit(false)
    }
    const save = () => {
        onEdit(todo.id, title)
        setEdit(false)
    }
    // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Container>
            {/*<Checkbox checked={completed} onChange={handleCheckboxChange}  size="small" />*/}
            {/*<input type='checkbox' checked={completed} onChange={handleCheckboxChange}/>*/}
            {edit ? (
                <Paper elevation={3} style={{
                    textDecoration: completed ? 'line-through' : 'none',
                    display: "flex",
                    marginTop: '20px',
                    alignItems: 'center',
                    borderRadius: '8px',
                    justifyContent: 'space-between',
                    paddingLeft: '10px',

                }}>

                    <TextField size="small" value={title} label="Edit" variant="outlined" onChange={handleInput}/>
                    <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
                        <Button size="small" onClick={save}>Save</Button>
                        <Button size="small" onClick={close}>Cansel</Button>
                    </ButtonGroup>
                    <TodoBtnContainer>
                        <Checkbox checked={completed} onChange={handleCheckboxChange} size="small" disabled={edit}/>
                        <IconButton
                            size="small"
                            onClick={handleDelete}
                            aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton size="small" onClick={handleEdit} aria-label="delete">
                            <EditIcon/>
                        </IconButton>
                    </TodoBtnContainer>

                </Paper>
                // <EditContainer>
                //     <TextField size="small" value={title} label="Edit" variant="outlined" onChange={handleInput}/>
                //     {/*<input type="text" value={title} onChange={handleInput}/>*/}
                //     <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
                //         <Button size="small" onClick={save}>Save</Button>
                //         <Button size="small" onClick={close}>Close</Button>
                //     </ButtonGroup>
                //     {/*<button onClick={save}>save</button>*/}
                //     {/*<button onClick={close}>close</button>*/}
                // </EditContainer>

            ) : (
                <div>
                    <Paper elevation={3} style={{
                        textDecoration: completed ? 'line-through' : 'none',
                        display: "flex",
                        marginTop: '20px',
                        alignItems: 'center',
                        borderRadius: '8px',
                        justifyContent: 'space-between',
                        paddingLeft: '10px'
                    }}>
                        <h3>{todo.title}</h3>
                        <TodoBtnContainer>
                            <Checkbox checked={completed} onChange={handleCheckboxChange} size="small"/>
                            <IconButton
                                size="small"
                                onClick={handleDelete}
                                aria-label="delete">
                                <DeleteIcon/>
                            </IconButton>
                            <IconButton size="small" onClick={handleEdit} aria-label="delete">
                                <EditIcon/>
                            </IconButton>
                        </TodoBtnContainer>

                    </Paper>
                    {/*<span>{completed ? 'yes' : 'no'}</span>*/}
                    {/*<ButtonGroup size="small" variant="outlined" aria-label="outlined button group">*/}
                    {/*    <Button onClick={handleEdit}>Edit</Button>*/}

                    {/*    <Button onClick={handleDelete}>Delete</Button>*/}
                    {/*</ButtonGroup>*/}
                    {/*<button onClick={handleEdit}>edit</button>*/}
                    {/*<button onClick={handleDelete}>delete</button>*/}
                </div>
            )}
        </Container>
    )
})
