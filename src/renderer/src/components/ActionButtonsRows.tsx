import { ComponentProps } from 'react'
import { NewNoteButton } from './buttons/NewNoteButton'
import { DeleteNoteButton } from './buttons/DeleteNoteButton'
import { cn } from '@renderer/utils'

export const ActionButtonsRow = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props} className={cn('flex justify-between', className)}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
