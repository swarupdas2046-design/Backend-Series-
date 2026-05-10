import React from "react";
import { useForm } from "react-hook-form";

const TodoForm = ({ onAddTodo }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    if (data.name.trim() && data.description.trim()) {
      onAddTodo(data);
      reset();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-cyan-600 mb-6">Add New Todo</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-gray-300 text-sm font-semibold mb-2">
            Todo Name
          </label>
          <input
            type="text"
            placeholder="Enter todo name"
            {...register("name", {
              required: "Todo name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 transition"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Description Input */}
        <div>
          <label className="block text-gray-300 text-sm font-semibold mb-2">
            Description
          </label>
          <textarea
            placeholder="Enter todo description"
            rows="4"
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 5,
                message: "Description must be at least 5 characters",
              },
            })}
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 transition resize-none"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
