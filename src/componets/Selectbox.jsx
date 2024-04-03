import React, { useId } from 'react'

function Selectbox({optionsList,onValueChange}) {
  return (
    <select onChange={(e)=>onValueChange(e)} className='bg-gray-900 outline- w-[85%]   shadow-lg h-10 p-2 focus:outline-none'>
        {optionsList.map((item)=><option key={useId()}>{item}</option>)}
    </select>
  )
}

export default Selectbox