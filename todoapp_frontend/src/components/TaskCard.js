import React from 'react';

const TaskCard = ({ task, onDelete, onToggle, onEdit }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 flex justify-between items-center">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task._id, !task.completed)}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through text-gray-500' : ''}>
          {task.title}
        </span>
      </div>
      <div>
        <button
          className="text-yellow-500 mr-3"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>
        <button
          className="text-red-500"
          onClick={() => onDelete(task._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
