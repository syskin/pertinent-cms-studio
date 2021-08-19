import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { updateState } from '../../../store/actions/sidebar'
import Tabs from '../Tabs'
import Editor from '@monaco-editor/react'

import PageConfiguration from '../../form/PageConfiguration'
import PageStructure from './PageStructure'
import { setActiveTag } from '../../../store/actions/tags'

const Sidebar: React.FC = () => {
  const dispatch = useDispatch()
  const { isSidebarOpen } = useSelector((state: RootState) => state.sidebar)
  const baseTransformDuration = `transform duration-300`
  const baseWrapperStyle = `${baseTransformDuration} flex-initial h-screen bg-gray-100 fixed right-0 shadow-sm z-20`
  const baseButtonStateStyle = `${baseTransformDuration} absolute right-1 bottom-1 rounded-lg bg-gray-100 shadow-sm px-2 py-1 m-2`

  const sidebar = useRef<HTMLDivElement>(null)

  const GeneralPanel = <PageConfiguration type="edit" />
  const StructurePanel = <PageStructure />
  const StylePanel = (
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
  )

  useEffect(() => {
    if (!isSidebarOpen) return
    const handleClick = (event: MouseEvent): void => {
      if (sidebar?.current && !sidebar?.current?.contains(event.target as Node)) {
        dispatch(updateState(!isSidebarOpen))
        dispatch(setActiveTag(undefined))
      }
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [isSidebarOpen, dispatch])

  const handleSidebar = (): void => {
    dispatch(updateState(!isSidebarOpen))
  }

  return (
    <div
      ref={sidebar}
      className={isSidebarOpen ? `${baseWrapperStyle} w-72` : `${baseWrapperStyle} w-0`}
    >
      <button
        className={isSidebarOpen ? `${baseButtonStateStyle} mr-60` : `${baseButtonStateStyle} mr-0`}
        onClick={handleSidebar}
      >
        {isSidebarOpen ? 'Close' : 'Open'}
      </button>
      <Tabs
        tabs={[
          { tabName: 'General', child: GeneralPanel },
          { tabName: 'Structure', child: StructurePanel },
          { tabName: 'Style', child: StylePanel },
        ]}
        defaultActiveIndex={0}
      />
    </div>
  )
}

export default Sidebar
