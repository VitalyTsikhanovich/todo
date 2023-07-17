import styled from "styled-components";
// import {Button, ButtonGroup} from '@mui/material';
export const Container = styled.div`
  //max-width: 400px;
  //background-color: aqua;
  
`

export const TodoContainer = styled.div`
  display: flex;
  //background-color: aqua;
  margin-top: 20px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid aqua;
  justify-content: space-between;
`

export const AddTodoContainer = styled.div`
  //border: 1px solid red;
  //display: flex;
  //flex-direction: column;
  //max-width: 300px;
  background-color: #282a36;

  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
  //border-radius: 8px;
`

export const TodoListContainer= styled.div`
margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-top: 20px;
  //align-items: center;
`

export const TodoBtnContainer = styled.div`
  display: flex;
  flex-direction: column;

`
export const AddTodo = styled.div`
//padding: 10px;
  display: flex;
  justify-content: space-around;
  background-color: white;
`

export const EditContainer = styled.div`
margin-top: 15px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  
`

// export const StyleButton =styled(ButtonGroup)`
// font-size: 10px;
//   color: red;
// `

export const Button = styled.button`
  background-color: #282a36;
  background-color: var(--background);
  border: none;
  border-radius: 0.5rem;
  color: #f8f8f2;
  color: var(--white);
  height: 100%;
  margin: 0.5rem;
  min-width: 5rem;
  outline: 2px solid #bd93f9;
  outline: 2px solid var(--purple);
  padding: 0.5rem;
`
