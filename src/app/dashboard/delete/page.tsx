import DeleteDataForm from '@/components/DeleteDataForm'
import React from 'react'

function DeleteEntry() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center font-[family-name:var(--font-geist-sans)] bg-background p-5 gap-5'>
      <h1 className='text-3xl text-center font-bold'>Delete Entry</h1>
      <DeleteDataForm/>
    </div>
  )
}

export default DeleteEntry