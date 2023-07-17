import React from 'react';


import {TodoList} from "./components/TodoList";
import {SHeader} from "./assets/styles/app.styles";

function App() {
    return (
<SHeader>
        <TodoList />
</SHeader>
    );
}

export default App;
