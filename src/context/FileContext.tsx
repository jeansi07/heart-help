import { createContext } from "react"

 export interface FileContextTypes  {
    file: File | null
    setFile: (newFile:File) => void
 }

const initialFileContext: FileContextTypes = { 
    file: null,
    setFile: () => null   
}

 export const FileContext = createContext<FileContextTypes>(initialFileContext)

 