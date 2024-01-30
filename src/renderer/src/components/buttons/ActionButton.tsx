import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export interface ActionButtonProps extends ComponentProps<'button'> {}

export const ActionButton = ({ className, ...props }: ActionButtonProps) => {
  return (
    <button
      className={cn(
        'px-2 py-1 rounded-md border border-zinc-400/50 hover:bg-zinc-600 transition-colors duration-100',
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  )
}
