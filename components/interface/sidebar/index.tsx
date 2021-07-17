import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { updateState } from '../../../store/actions/sidebar'
import Editor from '@monaco-editor/react'

const Sidebar: React.FC = () => {
  const dispatch = useDispatch()
  const { isSidebarOpen } = useSelector((state: RootState) => state.sidebar)
  const baseTransformDuration = `transform duration-300`
  const baseWrapperStyle = `${baseTransformDuration} flex-initial h-screen bg-gray-100 fixed right-0 shadow-sm z-20`
  const baseButtonStateStyle = `${baseTransformDuration} absolute right-1 bottom-1 rounded-lg bg-gray-100 shadow-sm px-2 py-1 m-2`

  const handleSidebar = (): void => {
    dispatch(updateState(!isSidebarOpen))
  }

  return (
    <div className={isSidebarOpen ? `${baseWrapperStyle} w-72` : `${baseWrapperStyle} w-0`}>
      <button
        className={isSidebarOpen ? `${baseButtonStateStyle} mr-60` : `${baseButtonStateStyle} mr-0`}
        onClick={handleSidebar}
      >
        {isSidebarOpen ? 'Close' : 'Open'}
      </button>
      <div className="mt-12 p-4">
        <Editor
          height="70vh"
          defaultLanguage="css"
          defaultValue=""
          options={{
            lineNumbers: false,
            contextmenu: false,
            minimap: {
              enabled: false,
            },
          }}
        />
      </div>
    </div>
  )
}

export default Sidebar
