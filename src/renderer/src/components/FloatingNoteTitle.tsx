import { cn } from '@renderer/utils'

export const FloatingNoteTitle = () => {
  const title = 'Hello World'
  return (
    <div className={cn('flex justify-center py-1')}>
      <span className="text-gray-400 text-sm">{title}</span>
    </div>
  )
}
