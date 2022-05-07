/* eslint-disable react/button-has-type */
import React from 'react'

const colors = {
  white: `bg-white hover:bg-gray-100`,
  gray: `bg-gray-100 hover:bg-gray-200`,
  green: `bg-green-600 hover:bg-green-700 text-white`,
  red: `bg-red-600 hover:bg-red-700 text-white`,
}
const sizes = {
  base: `h-10 w-10`,
  md: `h-9 w-9`,
}

type IconButtonProps = Pick<JSX.IntrinsicElements['button'], 'children' | 'type' | 'onClick'> & {
  color?: keyof typeof colors
  size?: keyof typeof sizes
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, type = 'button', size = 'base', color = 'white', ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={`rounded-md transition-colors flex items-center justify-center flex-shrink-0 ${colors[color]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  ),
)

export { IconButton }
