import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoCard from "./components/TodoCard";
import axios from "axios";
const App = () => {
  const [todos, setTodos] = useState([]);

  // Add new todo
  const handleAddTodo = async (data) => {
    try {
      let response = await axios.post(
        `http://localhost:5000/api/todo/create`,
        data,
      );
      console.log(response.data.List);
      GetAllList();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetAllList();
  }, []);

  // read todo via Get APi From Backend
  const GetAllList = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/todo`);
      setTodos(response.data.List || []);
    } catch (error) {
      console.log("Error fetching todos:", error);
      setTodos([]);
    }
  };

  // Delete todo
  const handleDeleteTodo = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/todo/delete/${id}`,
      );
      console.log(response);
      GetAllList();
    } catch (error) {
      console.log("error from delete api", error);
    }
    // setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Update todo
  const handleUpdateTodo = async (id, updatedData) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/todo/update/${id}`,
        updatedData,
      );
      console.log("Updated:", response.data);
      GetAllList();
    } catch (error) {
      console.log("Error updating todo:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-cyan-600 mb-2">My Todo App</h1>
        <p className="text-gray-400">
          Stay organized and manage your tasks efficiently
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto">
        {/* Form Section */}
        <TodoForm onAddTodo={handleAddTodo} />

        {/* Todos List Section */}
        <div>
          {todos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No todos yet. Create one to get started! 🚀
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-cyan-600 mb-6">
                Your Todos ({todos.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                {todos.map((todo) => (
                  <TodoCard
                    key={todo._id}
                    todo={todo}
                    onDelete={handleDeleteTodo}
                    onUpdate={handleUpdateTodo}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
