import React from 'react'
import { createRoot } from 'react-dom/client'
import ActionBar from './component/ActionBar'
import Display from './component/Display'
import { DatabaseProvider } from './context/DatabaseContext'
import { DrawerProvider } from './context/DrawerContext'
import { SyncProvider } from './context/SyncContext'
import './style/main.scss'

const container = document.getElementById('app')
if (!container) throw new Error('The container was not found in the DOM')

const root = createRoot(container)

const App = (): JSX.Element => {
  return (
    <SyncProvider>
      <DatabaseProvider>
        <DrawerProvider>
          <ActionBar />
          <Display />
        </DrawerProvider>
      </DatabaseProvider>
    </SyncProvider>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
