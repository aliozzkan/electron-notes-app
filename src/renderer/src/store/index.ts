import { notesMock } from '@renderer/mocks/notes'
import { NoteInfo } from '@shared/models/note-info.model'
import { atom } from 'jotai'

export const notesAtom = atom<NoteInfo[]>(notesMock)

export const selectedNoteIndexAtom = atom<number | null>(null)

export const selectedNoteAtom = atom((get) => {
  const notes = get(notesAtom)
  const index = get(selectedNoteIndexAtom)

  if (index === null) return null

  return notes[index]
})
