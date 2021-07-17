import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store'
import { close } from '../../../store/actions/modal'

const Modal: React.FC = () => {
  const dispatch = useDispatch()
  const { isOpen, type } = useSelector((state: RootState) => state.modal)

  const handleModalClose = (): void => {
    dispatch(close())
  }

  const baseTransition = `transition-opacity duration-300`
  const baseModalWrapper = `fixed inset-0 bg-gray-200 z-20 bg-opacity-40 flex items-center ${baseTransition}`

  return (
    <div
      className={
        isOpen
          ? `visible opacity-100 ${baseModalWrapper}`
          : `invisible opacity-0 ${baseModalWrapper}`
      }
    >
      <div className="rounded-lg shadow-lg h-3/5 w-4/5 mx-auto bg-white p-10">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <span className="text-lg font-medium text-gray-700">{type}</span>
          </div>
          <button className="mr-0 ml-auto" onClick={handleModalClose}>
            X
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
