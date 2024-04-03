import React from 'react'
import RenderCard from './RenderCard'
import { useId } from 'react'
import { useSelector } from 'react-redux'

function Card({data}) {
  const storeData = useSelector(state=>state)
  let filteredData=data
  
  if (storeData.type){
    filteredData = filteredData.filter((item)=>(
      item.category===storeData.type
  ))
  }
  if (storeData.cuarto){
    if (storeData.cuarto==='CON cuarto de maquinas'){
      filteredData = filteredData.filter((item)=>(
        item.caurto===true
      ))
    }else{
      filteredData = filteredData.filter((item)=>(
        item.caurto===false
      ))
    }
  }

  filteredData = filteredData.filter((item)=>(
    item.pasajeros[0] >= storeData.pasajero[0] && item.pasajeros[item.pasajeros.length-1]  <= storeData.pasajero[1]  &&
    item.carga[0] >= storeData.carga[0] && item.carga[item.carga.length-1]  <= storeData.carga[1]  &&
    item.velo[0] >= storeData.velo[0] && item.velo[item.velo.length-1]  <= storeData.velo[1]  
  ))

  if(storeData.search !==''){
    filteredData = filteredData.filter((item)=>(
      item.type.toLowerCase().includes(storeData.search.toLowerCase())
    ))
  }
  
  

  const check = filteredData.length > 0


  return (
  
    
    <div className='flex  flex-col gap-3 w-full '>
        {check ? filteredData.map((item)=><RenderCard key={String(item)} {...item} />): <div className='min-w-[100%] text-center pt-[30%] text-gray-400 font-bold size-[30px] h-screen '>No se han encontrado resultados</div>}
    </div>
  )
}

export default Card