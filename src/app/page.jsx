'use client'

import Image from "next/image";
import stylesHeader from "../styles/header.module.css";
import styleMain from  "../styles/main.module.css"
import { useEffect, useState } from "react";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 
  const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <>
      <header className={stylesHeader.header}>
          <Image
            src="/logo.svg"
            alt="Logo Focal"
            width={windowWidth < 839 ? 150 : 240}
            height={36}
            priority
          />
          <div className={stylesHeader.content}>Bem-vindo de volta, Marcus</div>
          <div className={stylesHeader.date}>{date.toLocaleDateString('pt-BR', options)}</div>
     </header>

     <main >
      <div className={styleMain.main}>
        <div>
        <div className={styleMain.container}>
              <span className={styleMain.header}>Suas tarefas de hoje</span>
              <div className={styleMain.body}>
                  <div className={styleMain.task}>
                      <input className={styleMain.check} type="checkbox" />
                      <label className={styleMain.label}>Lavar as mãos</label>
                      <Image 
                        src="/trash.svg" 
                        alt="Lixeira" 
                        width={24}
                        height={24}
                        className={styleMain.trash}
                      />
                  </div>
                  <div className={styleMain.task}>
                      <input className={styleMain.check} type="checkbox" />
                      <label className={styleMain.label}>Fazer um bolo</label>
                      <Image 
                        src="/trash.svg" 
                        alt="Lixeira" 
                        width={24}
                        height={24}
                        className={styleMain.trash}
                      />
                  </div>
                  <div className={styleMain.task}>
                      <input className={styleMain.check} type="checkbox" />
                      <label className={styleMain.label}>Lavar a louça</label>
                      <Image 
                        src="/trash.svg" 
                        alt="Lixeira" 
                        width={24}
                        height={24}
                        className={styleMain.trash}
                      />
                  </div>
              </div>
              <span className={styleMain.header}>Tarefas finalizadas</span>
              <div className={styleMain.body}>
                  <div className={styleMain.task}>
                      <input className={styleMain.check} type="checkbox" />
                      <label className={styleMain.corte}>Levar o lixo para fora</label>
                      <Image 
                        src="/trash.svg" 
                        alt="Lixeira" 
                        width={24}
                        height={24}
                        className={styleMain.trash}
                      />
                  </div>
              </div>
          </div>
          <div className={styleMain.position}>
             <button className={styleMain.acaoButton}>Adicionar nova tarefa</button>
          </div>
        </div>
      </div>
     </main>
  </>
  );
}

