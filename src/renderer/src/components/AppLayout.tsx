import { cn } from '@renderer/utils'
import { ComponentProps, forwardRef } from 'react'

export const RootLayout = ({ className, ...props }: ComponentProps<'main'>) => {
  return <main className={cn('flex flex-row h-screen bg-zinc-900/50', className)} {...props}></main>
}

export const Sidebar = (props: ComponentProps<'aside'>) => {
  return (
    <aside className={cn('w-[250px] h-[100vh + 10px] overflow-auto', props.className)}>
      {props.children}
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex-1 overflow-auto', className)} {...props}>
        {children}
      </div>
    )
  }
)

Content.displayName = 'Content'
