'use client'

import Image from "next/image";
import stylesHeader from "../../styles/header.module.css";
import { useHeader } from "../../hooks/useHeader";

export const Header = () => {
    const {windowWidth, formattedDateString} = useHeader();
    
    return (
        <header className={stylesHeader.header}>
            <Image
                src="/logo.svg"
                alt="Logo Focal"
                width={windowWidth < 839 ? 150 : 240}
                height={36}
                priority
            />
            <div className={stylesHeader.content}>Bem-vindo de volta, Diego</div>
            <div className={stylesHeader.date}>{formattedDateString}</div>
        </header>
    );  
}