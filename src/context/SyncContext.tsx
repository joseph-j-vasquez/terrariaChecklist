import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { ref, onValue, set } from 'firebase/database'
import { db } from '../firebase'

interface SyncContextProps {
  getChecked: (key: string) => boolean
  setChecked: (key: string, value: boolean) => void
  isLoaded: boolean
}

const SyncContext = createContext<SyncContextProps | undefined>(undefined)

export const SyncProvider: React.FC<{ children: ReactNode }> = ({ children }): JSX.Element => {
  const [state, setState] = useState<Record<string, boolean>>({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checklistRef = ref(db, 'checklist')
    const unsubscribe = onValue(checklistRef, (snapshot) => {
      setState(snapshot.val() ?? {})
      setIsLoaded(true)
    })
    return (): void => unsubscribe()
  }, [])

  const getChecked = (key: string): boolean => state[key] ?? false

  const setChecked = (key: string, value: boolean): void => {
    set(ref(db, `checklist/${key}`), value)
  }

  return (
    <SyncContext.Provider value={{ getChecked, setChecked, isLoaded }}>
      {children}
    </SyncContext.Provider>
  )
}

export function useSync(): SyncContextProps {
  const context = useContext(SyncContext)
  if (!context) throw new Error('useSync must be used within SyncProvider')
  return context
}
