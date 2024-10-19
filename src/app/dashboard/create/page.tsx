import CreateDataForm from '@/components/CreateDataForm'
import React from 'react'

function CreateEntry() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center font-[family-name:var(--font-geist-sans)] bg-background p-5 gap-5'>
      <h1 className='text-3xl text-center font-bold'>Create Entry</h1>
      <CreateDataForm/>
    </div>
  )
}

export default CreateEntry