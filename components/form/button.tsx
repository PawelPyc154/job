/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import 'styled-components/macro'
import clsx from 'clsx'
import { Spinner } from 'components/common/spinner'

const colors = {
  white: `bg-white hover:bg-gray-100 text-black`,
  gray: `bg-gray-100 hover:bg-gray-200 text-black`,
  green: `bg-green-600 hover:bg-green-700 text-white`,
}
const loadingColors: typeof colors = {
  white: `text-white`,
  gray: `text-gray-100`,
  green: `text-green-600`,
}

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  color?: keyof typeof colors
  isLoading?: boolean
}

const Button = ({ children, type = 'button', color = 'green', isLoading, ...props }: ButtonProps) => (
  <button
    className={clsx(
      'bg-green-600 hover:bg-green-700 disabled:(opacity-30 pointer-events-none) text-white font-medium rounded-md px-4 h-10 flex items-center relative select-none',
      colors[color],
      isLoading && ['pointer-events-none', loadingColors[color]],
    )}
    type={type}
    {...props}
  >
    {children}
    {isLoading && <Spinner size="sm" />}
  </button>
)

export { Button }
