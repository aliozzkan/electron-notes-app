import { notesMock } from '@renderer/mocks/notes'
import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'
import { NotePreview } from './NotePreview'

export const NotesPreviewList = (props: ComponentProps<'ul'>) => {
  return (
    <div className={cn('text-center p-4', props.className)}>
      <span>No Notes Yet</span>
    </div>
  )

  return (
    <div className={cn('space-y-1', props.className)}>
      {notesMock.map((note) => (
        <NotePreview note={note} key={note.id} />
      ))}
    </div>
  )
}
