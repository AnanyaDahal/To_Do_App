import React, { useEffect, useState } from 'react';
import API from '../api';
import TaskCard from '../components/TaskCard';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [editTask, setEditTask] = useState(null);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    const res = await API.get('/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (editTask) {
      await API.put(`/tasks/${editTask._id}`, { title });
    } else {
      await API.post('/tasks', { title });
    }
    setTitle('');
    setEditTask(null);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const handleToggle = async (id, completed) => {
    await API.put(`/tasks/${id}`, { completed });
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Your Tasks</h1>
        <button onClick={logout} className="text-red-500">Logout</button>
      </div>
      <form onSubmit={handleAddTask} className="mb-6 flex">
        <input
          type="text"
          className="p-2 border rounded w-full mr-2"
          placeholder="Add task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          {editTask ? 'Update' : 'Add'}
        </button>
      </form>
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onDelete={handleDelete}
            onToggle={handleToggle}
            onEdit={(task) => {
              setEditTask(task);
              setTitle(task.title);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
