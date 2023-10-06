import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{
        id:1,
        text:'hello world !'
    }]
}
functionSayHello(){
    console.log('Hello')
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo={ 
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
    }
})
export const {}={addTodo,remoeTodo}=todoSlice.actions
export default todoSlice.reducer





