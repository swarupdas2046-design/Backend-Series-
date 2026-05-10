import React, { useState } from "react";
import { useForm } from "react-hook-form";

const TodoCard = ({ todo, onDelete, onUpdate }) => {

    
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: todo.name,
      description: todo.description,
    },
  });

  const onSubmit = (data) => {
    if (data.name.trim() && data.description.trim()) {
      onUpdate(todo._id, data);
      setIsEditing(false);
      reset();
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    reset();
  };

  if (isEditing) {
    return (
      <div className="bg-gray-800 border-2 border-yellow-600 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold text-yellow-500 mb-4">Edit Todo</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Edit Name Input */}
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Todo Name
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Todo name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Edit Description Input */}
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Description
            </label>
            <textarea
              rows="4"
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 5,
                  message: "Description must be at least 5 characters",
                },
              })}
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 transition resize-none"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 border-2 border-cyan-600 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
      {/* Todo Header */}
      <h3 className="text-xl font-bold text-cyan-400 mb-2">{todo.name}</h3>

      {/* Todo Description */}
      <p className="text-gray-300 mb-6 leading-relaxed">{todo.description}</p>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => {
            
            setIsEditing(true)
        }}
          className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        >
          Update
        </button>
        <button
          onClick={() => onDelete(todo._id)}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
