
import style from '../styles/modal.module.css'

export const Modal = ({ isOpen, onClose, onAddTask, taskToDelete, setNewTask, newTask }) => {
    const handleAddTask = () => {
        if (newTask !== "") {
        const taskObject = { id: Date.now(), task: newTask};
        onAddTask(taskObject);
        setNewTask("");
        onClose();
        }
    };

    const titles = {
      titleAdd: "Nova Tarefa", 
      titleDelete: "Deletar Tarefa"
    }
    const descriptions = {
      descriptionAdd: "Título", 
      descriptionDelete: "Tem certeza que você deseja deletar essa tarefa?"
    }

    const buttons = {
      buttonAdd: "Adicionar",
      buttonDelete: "Deletar"
    }

    return (
        isOpen && (
            <div className={style.modal}>
              <div className={style.modalContent}>
                <h2>
                  {taskToDelete === null ? 
                  titles.titleAdd: 
                  titles.titleDelete}
                </h2>
                <span className={style.teste}>
                 {taskToDelete === null ? 
                  descriptions.descriptionAdd: 
                  descriptions.descriptionDelete}
                </span>
                <div>
                  {taskToDelete === null ? 
                    <input
                      className={style.inputTitle}
                      type="text"
                      placeholder="Digite"
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                     /> : ""
                  }
                </div>
                <div className={style.modalButtons}>
                  <button onClick={onClose} className={style.btnCancel}>
                    Cancelar
                  </button>
                  <button 
                    onClick={handleAddTask} 
                    className={taskToDelete === null ? 
                    style.btnAdd: 
                    style.btnDelete}
                    >
                      {taskToDelete === null ? 
                      buttons.buttonAdd: 
                      buttons.buttonDelete }
                  </button>
                </div>
              </div>
            </div>
          )
        );
}