import { ReactNode } from "react";


interface ButtonProps{children:ReactNode}
export const Button =({ children }:ButtonProps)=> <button style={{color:'red'}}>{children}</button>