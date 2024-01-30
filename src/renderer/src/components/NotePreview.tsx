import { cn, dateFormatter, formatDateTime } from '@renderer/utils'
import { NoteInfo } from '@shared/models/note-info.model'
import { ComponentProps } from 'react'

interface NotePreviewProps extends ComponentProps<'div'> {
  note: NoteInfo
  isActive?: boolean
}

export const NotePreview = ({ note, isActive, className, ...props }: NotePreviewProps) => {
  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75',
        {
          'bg-zinc-400/75': isActive,
          'hover:bg-zinc-500/75': !isActive
        },
        className
      )}
      {...props}
    >
      <h3 className="font-bold mb-1 truncate">{note.title}</h3>
      <span className="inline-block w-full mb-2 text-sm font-light text-left">
        {formatDateTime(note.updatedAt)}
      </span>
    </div>
  )
}
