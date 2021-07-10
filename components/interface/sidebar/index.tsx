import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { updateState } from '../../../store/actions/sidebar'

const Sidebar: React.FC = () => {
  const dispatch = useDispatch()
  const { state } = useSelector((state: RootState) => state.sidebar)
  const baseTransformDuration = `transform duration-300`
  const baseWrapperStyle = `${baseTransformDuration} flex-initial h-screen bg-gray-100 fixed right-0 shadow-sm`
  const baseButtonStateStyle = `${baseTransformDuration} absolute right-1 rounded-lg bg-gray-100 shadow-sm px-2 py-1 m-2`

  const handleSidebar = () => {
    dispatch(updateState())
  }

  return (
    <div className={state ? `${baseWrapperStyle} w-72` : `${baseWrapperStyle} w-0`}>
      <button
        className={state ? `${baseButtonStateStyle} mr-60` : `${baseButtonStateStyle} mr-0`}
        onClick={handleSidebar}
      >
        {state ? 'Close' : 'Open'}
      </button>
    </div>
  )
}

export default Sidebar
