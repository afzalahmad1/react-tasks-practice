import React, { useState } from 'react';

function Rmock4() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);



  const handleTaskSubmit = (event) => {
    
    if (inputValue.trim() === '') return;

    const newTasks = [...tasks, {id: Date.now(),  text: inputValue, completed: false }];
    setTasks(newTasks);
    setInputValue('');
    setUndoStack([...undoStack, tasks]);
    setRedoStack([]);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
      setUndoStack([...undoStack, tasks]);
      setRedoStack([]);
  };

  const revertTaskState = () => {
    if (undoStack.length === 0) return;
    const prevState = undoStack.pop();
    setTasks(prevState);
    setRedoStack([...redoStack, tasks]);
  };

  const clearCompletedTasks = () => {
    const filteredTasks = tasks.filter(task => !task.completed);
    setTasks(filteredTasks);
    setUndoStack([...undoStack, tasks]);
    setRedoStack([]);
  };

  const undo = () => {
    if (undoStack.length === 0) return;
    const prevState = undoStack.pop();
    setTasks(prevState);
    setRedoStack([...redoStack, tasks]);
  };

  const redo = () => {
    if (redoStack.length === 0) return;
    const nextState = redoStack.pop();
    setTasks(nextState);
    setUndoStack([...undoStack, tasks]);
  };

  return (
    <div>
      <div >
        <input
          type="text"
          placeholder="Add new task"
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
        />
        <button type="submit" onClick={handleTaskSubmit}>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={revertTaskState}>Revert</button>
      <button onClick={clearCompletedTasks}>Clear completed tasks</button>
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
    </div>
  );
}

export default Rmock4;
