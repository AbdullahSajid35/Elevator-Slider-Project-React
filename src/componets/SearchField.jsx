import React from 'react'

function SearchField({placeholder,type,onValueChange}) {
  return (
     <input className='outline-none  h-10   text-white px-3 border-b-2 w-[85%] bg-black ' onChange={(e)=>onValueChange(e)} type={type} placeholder={placeholder} />
  )
}

export default SearchField