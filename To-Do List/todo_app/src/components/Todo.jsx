import { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchterm } from "../redux/actions";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";

const Todo = () => {
    const dispatch = useDispatch()
    const [newTodoText, setNewTodoText] = useState("");
    const [searchTerm, setSearchTerm] = useState("");


    const handleAddToDo = (text) => {
        dispatch(addTodo(text))
    }
    const handleAddToDoClick = () => {
        if (newTodoText.trim() != "") {
            handleAddToDo(newTodoText.trim());
            setNewTodoText("");
        }
    }

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchterm(value))
    }

    return (
        <div className=" h-full w-full p-4 sm:mt-8 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
">
    {/* max-w-4xl  sm:mt-8 p-4 bg-gray-100 rounded" */}
            <h2 className="mt-3 mb-6 text-3xl font-bold text-center uppercase text-white">PERSONAL TODO APP</h2>

            {/* input text and btn */}
            <div className="flex items-center mb-4">
                <input value={newTodoText} type="text" onChange={(e) => setNewTodoText(e.target.value)} name="addTodoInput" id="addTodoInput " placeholder="Add Todo..." className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={handleAddToDoClick}>
                    <BsPlus /></button>
            </div>

            {/* filter and search */}
            <div className="flex items-center justify-between">
                <FilterButton/>
                <div className="flex items-center mb-4">
                    <input value={searchTerm} type="text" onChange={(e) => handleSearchChange(e.target.value)} name="addTodoInput" id="addTodoInput " placeholder="Search..." className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                    <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
                    <BsSearch /></button>
                </div>
                
            </div>


            <TodoList/>

        </div>


    )


}

export default Todo