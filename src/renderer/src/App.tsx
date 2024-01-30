import { ActionButtonsRow } from './components/ActionButtonsRows'
import { Content, RootLayout, Sidebar } from './components/AppLayout'
import { FloatingNoteTitle } from './components/FloatingNoteTitle'
import { MarkdownEditor } from './components/MarkdownEditor'
import { NotesPreviewList } from './components/NotesPreviewList'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <RootLayout>
      <Sidebar className="p-2">
        <ActionButtonsRow className="mt-1" />
        <NotesPreviewList className="mt-2" />
      </Sidebar>
      <Content className="border-l border-l-white/20 bg-zinc-900/10">
        <FloatingNoteTitle />
        <MarkdownEditor />
      </Content>
    </RootLayout>
  )
}

export default App
