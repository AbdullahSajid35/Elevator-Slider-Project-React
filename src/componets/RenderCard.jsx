import React from 'react'
import image1 from '../assets/img1.svg'
import image2 from '../assets/img2.svg'
import image3 from '../assets/img3.svg'
import image4 from '../assets/img4.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare ,faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons'
function RenderCard({type,category,area,desc,caurto,pasajeros,carga,velo}) {

let image=image4

if (type==='N6000 (High Speed)'){
    image=image1
}else if(['KLG','KLGW','KLW'].includes(type)){
    image=image2
}else if(['MP Ares','MP H','MP Mediclift Gearless','MP Mediclift Gearless Hidráulico'].includes(type)){
    image=image3
}



  return (
    <div className='bg-blue-300 hover:bg-white duration-300  text-black cursor-pointer p-4'>
        <div className='flex justify-between items-center mb-6'>
            <img src={image} alt="image1" width='100px'  height='200px' />
            <h1 className='text-blue-500 self-start  '><b>SEE MORE </b><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h1>
        </div>
        <div className='flex gap-3  '>
            <div className='flex flex-col items-start gap-4 flex-1 '>
                <h1 className='text-2xl font-bold'>{type}</h1>
                <div className='text-left flex'>
                    <h1 className='bg-black p-1 font-bold  text-white mr-2'>{category}</h1>
                    <h1 className='bg-white p-1 font-bold '>{area}</h1>
                </div>
                <p className='text-left'>
                    {desc}
                </p>
            </div>
            <div className='flex flex-col   gap-2 flex-1  items-stretch'>
                <h1 className='self-start'>{caurto ? <FontAwesomeIcon icon={faCircleCheck} /> : <FontAwesomeIcon  icon={faCircle} /> }  Caurto de maquinas</h1>
                <div>
                <h1 className='font-bold text-wrap  text-left'>{String(pasajeros)}</h1>
                <div className='flex gap-2'>
                    <div><p className='text-blue-600 '>Pasajeros</p></div>
                    <div className='border-b border-[rgb(95,120,160)] flex-grow self-center'   ></div>
                </div>
                </div>

                <div>
                <p className='font-bold  text-left text-wrap'  >{String(carga)}</p>
                <div className='flex gap-2  '>
                    <div><p className='text-blue-600 '>Carga [kg]</p></div>
                    <div className='border-b border-[rgb(95,120,160)] flex-grow self-center'   ></div>
                </div>
                </div>

                <div>
                <h1 className='font-bold p-0 text-left text-wrap '  >{String(velo)}</h1>
                <div className='flex gap-2'>
                    <div><p className='text-blue-600 '>Velocidad [m/s]</p></div>
                    <div className='border-b border-[rgb(95,120,160)] flex-grow  self-center'   ></div>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default RenderCard