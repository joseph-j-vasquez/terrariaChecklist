import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import data from '../../database.json'
import { Sections } from '../type/sections'

const DatabaseContext = createContext<Sections | undefined>(undefined)

interface DatabaseProviderProps {
  children: ReactNode
}

const DatabaseProvider: React.FC<DatabaseProviderProps> = ({ children }) => {
  const [sections, setSections] = useState<Sections | undefined>(undefined)

  useEffect(() => {
    setSections(data)
  }, [])

  return <DatabaseContext.Provider value={sections}>{children}</DatabaseContext.Provider>
}

function useDatabase(): Sections | undefined {
  return useContext(DatabaseContext)
}

export { DatabaseContext, DatabaseProvider, useDatabase }
