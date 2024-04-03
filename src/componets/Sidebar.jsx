import React from 'react'
import RangeSlider from './RangeSlider'
import Selectbox from './Selectbox'
import SearchField from './SearchField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { updatePasjero,updateCarga,updateVelo,filterType,filterCuarto,filterSearch } from '../store/elevatorSlice';
function Sidebar() {
    const pasjero = useSelector(state=>state.pasajero)
    const carga = useSelector(state=>state.carga)
    const velo = useSelector(state=>state.velo)
    // const allData = useSelector(state=>state)
    // console.log(allData)
    const dispatch = useDispatch()


    const onSearchChange=((e)=>{
        dispatch(filterSearch(e.target.value))
    })
    const onPasjeroChange = ((e,newValue)=>{
        dispatch(updatePasjero(newValue))

    })

    const onCargaChange = ((e,newValue)=>{
        dispatch(updateCarga(newValue))
    })

    const onVeloChange = ((e,newValue)=>{
        dispatch(updateVelo(newValue))
    })

    const onTypeChange = ((e)=>{
        dispatch(filterType(e.target.value))
    })

    const onCuartoChange = ((e)=>{
        dispatch(filterCuarto(e.target.value))
    })

  return (
    <div className='w-[65%]  p-7 flex flex-col gap-5 max-h-screen top-10 text-white bg-black'>
        <div>
            <SearchField type="text" onValueChange={onSearchChange} placeholder="Buscar..." />
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </div>
        <div>
            <Selectbox onValueChange={onTypeChange}  optionsList={["Pasajeros",'Panorámicos','Hospitales','Carga']} />
        </div>
        <div>
            <Selectbox  onValueChange={onCuartoChange} optionsList={["Cuarto de maquinas",'CON cuarto de maquinas','SIN cuarto de maquinas']} />
        </div>
        <div>
            <div className='flex justify-between'>
            <h1>Pasajeros</h1>
            <h1><u>Limpiar</u></h1>
            </div>
            <RangeSlider minValue={1}  maxValue={160} values={pasjero} onValueChange={onPasjeroChange} />
        </div>

        <div>
            <div className='flex justify-between'>
            <h1>Carga [kg]</h1>
            <h1><u>Limpiar</u></h1>
            </div>
            <RangeSlider minValue={100} maxValue={12000} values={carga} onValueChange={onCargaChange} />
        </div>


        <div>
            <div className='flex justify-between'>
            <h1>Velocidad [m/s]</h1>
            <h1><u>Limpiar</u></h1>
            </div>
            <RangeSlider minValue={0.15} maxValue={3.5} values={velo} onValueChange={onVeloChange} />
        </div>
    </div>



  )
}

export default Sidebar












