'use client'

import Image from "next/image";
import styleMain from  "../styles/main.module.css"
import { Modal } from "./Modal";
import { useMain } from "../hooks/useMain";

export const Main = () => {
    const {tasks, handleTaskCompletion, completedTasks,
           handleTaskNow, handleOpenModal, isOpen,
            handleAddTask} = useMain()
      
    return (
        <main className={styleMain.global}>
        <div className={styleMain.main}>
            <div>
            <div className={styleMain.container}>
                <span className={styleMain.header}>Suas tarefas de hoje</span>
                <div className={styleMain.body}>
                    {tasks.map((task, index) => (
                        <div key={task.id} className={styleMain.task}>
                            <input
                                className={styleMain.check}
                                type="checkbox"
                                onChange={(e) => handleTaskCompletion(index, e.target.checked)}
                            />
                            <label className={styleMain.label}>{task.task}</label>
                            <Image
                                src="/trash.svg"
                                alt="Lixeira"
                                width={24}
                                height={24}
                                className={styleMain.trash}
                            />
                        </div>
                        ))}
                </div>
                <span className={styleMain.header}>Tarefas finalizadas</span>
                <div className={styleMain.body}>
                    {completedTasks.map((task, index) => (
                    <div key={task.id} className={styleMain.task}>
                        <input
                            className={styleMain.check}
                            type="checkbox"
                            readOnly
                            checked
                            onChange={(e) => handleTaskNow(index, e.target.value)}
                        />
                        <label className={styleMain.taskFinished}>{task.task}</label>
                        <Image
                            src="/trash.svg"
                            alt="Lixeira"
                            width={24}
                            height={24}
                            className={styleMain.trash}
                        />
                    </div>
                    ))}
                </div>
            </div>
            <div className={styleMain.position}>
                <button 
                    className={styleMain.acaoButton} 
                    onClick={() => handleOpenModal(true)}>
                        Adicionar nova tarefa
                </button>
            </div>
            </div>
            <Modal 
                isOpen={isOpen}
                onClose={() => handleOpenModal(false)}
                onAddTask={handleAddTask}
            />
        </div>
     </main>
    );
}