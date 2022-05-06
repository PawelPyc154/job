import React, { ReactNode } from 'react'

interface ButtonProps {children:ReactNode}


const Button = ({children}:ButtonProps)=> {
  return ( <button className='bg-red-600 rounded-sm'>{children}</button> )
}
 
export {Button}