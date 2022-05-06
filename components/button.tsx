import React, { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}

function Button({ children }: ButtonProps) {
  // const test = 'test'

  return (
    <button type="button" className="bg-red-600 rounded-sm">
      {children}
    </button>
  )
}

export { Button }
