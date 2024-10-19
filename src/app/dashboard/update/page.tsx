import UpdateDataForm from '@/components/updateDataFrom'
import React from 'react'

function UpdateDashBoard() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center font-[family-name:var(--font-geist-sans)] bg-background p-5 gap-5'>
      <h1 className='text-3xl text-center font-bold'>Update Entry</h1>
      <UpdateDataForm/>
    </div>
  )
}

export default UpdateDashBoard