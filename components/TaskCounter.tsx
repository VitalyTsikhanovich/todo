import {FC, memo} from "react";
import {TodoModel} from "../models/todo.model";

type TTaskCounter = {
    todo: TodoModel[]
}

export const TaskCounter: FC<TTaskCounter> = memo(({todo}) => {

    const taskCount = todo.length

    return (
        <div>
            total task : {taskCount}
        </div>
    )
});
