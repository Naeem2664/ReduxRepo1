import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAllUsers } from '../store/slices/UserSlice'

const DeleteAlluser = () => {

  const dispatch=useDispatch()
  const clearAll=()=>{
    dispatch(deleteAllUsers())

  }

  return (
    <div className='container delete-all'>
        <button className='btn btn-danger' onClick={clearAll}>Delete All</button>
    </div>
  )
}

export default DeleteAlluser