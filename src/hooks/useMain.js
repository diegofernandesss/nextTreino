import {useState, useEffect} from 'react'

export const useMain = () => {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);    
    const [newTask, setNewTask] = useState("");
    
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
        setTasks(storedTasks);
        setCompletedTasks(completedTasks)
      }, []);
    
    const handleOpenModal = (id, boolean) => {
      if (id !== null) {
        setTaskToDelete(id);
        setIsOpen(boolean);
      } else {
        setIsOpen(boolean);
        setTaskToDelete(null);
        setNewTask("")
      }
    };
    
    const handleAddTask = (id, newTask) => {
      if (id !== null) {
        let updatedTasks = [];
  
        if (completedTasks.some((task) => task.id === id)) {
          updatedTasks = completedTasks.filter(
            (task) => task.id !== id
          );
          setCompletedTasks(updatedTasks);
          updateLocalStorage2(updatedTasks);
        } else {
          updatedTasks = tasks.filter((task) => task.id !== id);
          setTasks(updatedTasks);
          updateLocalStorage(updatedTasks);
        }
        setIsOpen(false);
        setTaskToDelete(null);
      } else {
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        updateLocalStorage(updatedTasks);
      }
    };
    
    const updateLocalStorage = (tasks) => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    const updateLocalStorage2 = (tasks) => {
        localStorage.setItem("completedTasks", JSON.stringify(tasks));
    }
    
    const handleTaskCompletion = (index, isCompleted) => {
      const updatedTasks = [...tasks];
      const completedTask = updatedTasks.splice(index, 1)[0];
    
      if (isCompleted) {
        setCompletedTasks([...completedTasks, completedTask]);
        updateLocalStorage2([...completedTasks, completedTask]);
      } else {
        setCompletedTasks(completedTasks.filter((task) => task.id !== completedTask.id));
      }
    
      setTasks(updatedTasks);
      updateLocalStorage(updatedTasks);
      };

      const handleTaskNow = (index, isCompleted) => {
        const updatedTasks12 = [...completedTasks];
        const completedTask = updatedTasks12.splice(index, 1)[0];
      
        if (isCompleted) {
          setTasks([...tasks, completedTask]);
          updateLocalStorage([...tasks, completedTask]);
        } else {
          setTasks(tasks.filter((task) => task.id !== completedTask.id));
        }
      
        setCompletedTasks(updatedTasks12);
        updateLocalStorage2(updatedTasks12);
      }

      return {
        tasks,
        handleTaskCompletion,
        completedTasks,
        handleTaskNow,
        handleOpenModal,
        isOpen,
        handleAddTask,
        taskToDelete,
        setNewTask,
        newTask
      }
}