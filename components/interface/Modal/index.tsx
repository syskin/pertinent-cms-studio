import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store'
import { closeModal } from '../../../store/actions/modal'
import { ADD_PAGE, DELETE_PAGE, EDIT_SITE, FormTypes } from '../../../store/types/modal'

import AddPage from '../../form/AddPage'
import DeletePage from '../../form/DeletePage'
import EditSite from '../../form/EditSite'

const Modal: React.FC = () => {
  const dispatch = useDispatch()
  const { isOpen, type } = useSelector((state: RootState) => state.modal)

  const handleModalClose = (): void => {
    dispatch(closeModal())
  }

  const baseTransition = `transition-opacity duration-300`
  const baseModalWrapper = `fixed inset-0 bg-gray-200 z-20 bg-opacity-40 flex items-center ${baseTransition}`
  const modalWrapper = `rounded-lg shadow-lg mx-auto bg-white p-6 ${sizeModal(type)}`

  return (
    <div
      className={
        isOpen
          ? `visible opacity-100 ${baseModalWrapper}`
          : `invisible opacity-0 ${baseModalWrapper}`
      }
    >
      <div className={modalWrapper}>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <span className="text-lg font-medium text-gray-700">{type}</span>
          </div>
          <button className="mr-0 ml-auto" onClick={handleModalClose}>
            X
          </button>
        </div>
        <div>{getForm({ type })}</div>
      </div>
    </div>
  )
}

const sizeModal = (type: FormTypes): string | null => {
  switch (type) {
    case ADD_PAGE:
      return `h-1/2 w-2/3`
    case DELETE_PAGE:
      return `h-1/3 w-1/2`
    case EDIT_SITE:
      return `h-4/5 w-4/5`
    default:
      return null
  }
}

interface formProps {
  type: FormTypes
}

const getForm: React.FC<formProps> = ({ type }) => {
  switch (type) {
    case ADD_PAGE:
      return <AddPage />
    case DELETE_PAGE:
      return <DeletePage />
    case EDIT_SITE:
      return <EditSite />
    default:
      return null
  }
}

export default Modal
