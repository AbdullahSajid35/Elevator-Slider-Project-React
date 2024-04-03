import './App.css'
import Card from './componets/Card'
import RangeSlider from './componets/RangeSlider'
import Sidebar from './componets/Sidebar'


function App() {
  const data = [
    {type:'N6000 (High Speed)',category:'Pasajeros',area:'Gran Altura',desc:'Los ascensores de alta velocidad de Nidecestán diseñados en función del ahorro detiempo, la gestión del tráfico y laseguridad. Calidad basada en lainnovación.',caurto:true,pasajeros:[13,16,18,21,26],carga:[1000,1200,1350,1600,2000],velo:[3,3.5]},
    {type:'KLG',category:'Panorámicos',area:'Estándar',desc:'Detalles humanos para que sea más fácil y cómodo, con una mejora general en la experiencia de transporte.',caurto:true,pasajeros:[10,13,15,16,18,21],carga:[800,1000,1100,1250,1350,1600],velo:[1,1.61,2,2.5]},
    {type:'KLGW',category:'Panorámicos',area:'Estándar',desc:'Detalles humanos para que sea más fácil y cómodo, con una mejora general en la experiencia de transporte.',caurto:false,pasajeros:[6,8,10,13,14,15,16,18,21,26],carga:[450,630,800,1000,1050,1150,1250,1350,1600,2000],velo:[1,1.6,1.75]},
    {type:'KLW',category:'Pasjeros',area:'Gama Estándar',desc:'Elimina las restricciones del elevador en cuanto a construcción, costos de construcción, estilo de diseño arquitectónico y alcances de utilización, mientras ahorra espacio y costos.',caurto:false,pasajeros:[6,8,10,13,14,15,16,18,21,26],carga:[450,630,800,1000,1050,1150,1250,1350,1600,2000],velo:[1,1.6,1.75]},
    {type:'MP Ares',category:'Panorámicos',area:'Estándar',desc:'La solución eficaz para edificios sinascensor de tráfico bajo-medio. Máximaflexibilidad para adaptarse a huecosirre.',caurto:false,pasajeros:[2,3,4,5,6,8],carga:[150,180,225,320,375,400,450,480,630],velo:[0.63]},
    {type:'MP Ares',category:'Panorámicos',area:'Estándar',desc:'La solución eficaz para edificios sinascensor de tráfico bajo-medio. Máximaflexibilidad para adaptarse a huecosirre.',caurto:true,pasajeros:[2,3,4,5,6,8],carga:[150,180,225,320,375,400,450,480,630],velo:[0.63]},
    {type:'MP H',category:'Panorámicos',area:'Estándar',desc:'Adaptabilidad fiable y máxima optimización de la superficie de cabina. Ideal para edificios de hasta 15 metros de recorrido, con un tráfico bajo-medio.',caurto:true,pasajeros:[4,5,6,8,10,13,17,20],carga:[320,375,450,480,630,800,1000,1275,1500],velo:[0.52,0.63]},
    {type:'MP H',category:'Panorámicos',area:'Gama Estándar',desc:'Adaptabilidad fiable y máxima optimización de la superficie de cabina. Ideal para edificios de hasta 15 metros de recorrido, con un tráfico bajo-medio.',caurto:false,pasajeros:[4,5,6,8,10,13],carga:[320,375,450,480,630,750,800,1000],velo:[0.52,0.63]},
    {type:'MP H',category:'Panorámicos',area:'GranCapacidad',desc:'Adaptabilidad fiable y máxima optimización de la superficie de cabina. Ideal para edificios de hasta 15 metros de recorrido, con un tráfico bajo-medio.',caurto:true,pasajeros:[26,33,40,46,53,60,66,73,80,86],carga:[2000,2500,3000,3500,4000,4500,5000,5500,6000,6500],velo:[0.4,0.5]},
    {type:'MP Mediclift Gearless',category:'Hospitales',area:'Gama Estándar',desc:'Máxima eficiencia de hueco, ecoeficiencia y ecodiseño. Ideal para edificios de hasta 15 paradas, o 50 metros de recorrido, de tráfico medio.',caurto:true,pasajeros:[13,16,21,26,33],carga:[1000,1275,1600,2000,2500],velo:[1,1.6]},
    {type:'MP Mediclift Gearless',category:'Hospitales',area:'Gama Estándar',desc:'Máxima eficiencia de hueco, ecoeficiencia y ecodiseño. Ideal para edificios de hasta 15 paradas, o 50 metros de recorrido, de tráfico medio.',caurto:false,pasajeros:[13,16,21,26,33],carga:[1000,1275,1600,2000,2500],velo:[1,1.6]},
    {type:'MP Mediclift Gearless',category:'Hospitales',area:'Gran Altura',desc:'Máxima eficiencia de hueco, ecoeficiencia y ecodiseño. Ideal para edificios de hasta 15 paradas, o 50 metros de recorrido, de tráfico medio.',caurto:false,pasajeros:[13,16,21,26,33],carga:[1000,1275,1600,2000,2500],velo:[2.5]},
    {type:'MP Mediclift Gearless',category:'Hospitales',area:'Gran Altura',desc:'Máxima eficiencia de hueco, ecoeficiencia y ecodiseño. Ideal para edificios de hasta 15 paradas, o 50 metros de recorrido, de tráfico medio.',caurto:true,pasajeros:[13,16,21,26,33],carga:[1000,1275,1600,2000,2500],velo:[2.5]},
    {type:'MP Mediclift Gearless Hidráulico',category:'Hospitales',area:'Gama Estándar',desc:'Gran adaptabilidad que permite obtener la máxima superficie de cabina en el mínimo espacio. Ideal para edificios de hasta 15 metros de recorrido, con un tráfico bajo-medio.',caurto:false,pasajeros:[13,17,21],carga:[1000,1275,1600],velo:[0.5]},
    {type:'MP Mediclift Gearless Hidráulico',category:'Hospitales',area:'Gama Estándar',desc:'Gran adaptabilidad que permite obtener la máxima superficie de cabina en el mínimo espacio. Ideal para edificios de hasta 15 metros de recorrido, con un tráfico bajo-medio.',caurto:true,pasajeros:[13,17,21,26,33],carga:[1000,1275,1600,2000,2500],velo:[0.5]},
    {type:'Freight',category:'Carga',area:'Gran Capacidad',desc:'Este equipo es ideal en el campo de la logística, en las necesidades de fábricas, almacenes, centros comerciales, supermercados, estaciones y aeropuertos, asegurando la confiabilidad propia de Aoyama Elevator.',caurto:false,pasajeros:[13,26,40,66],carga:[1000,2000,3000,5000],velo:[0.25,0.5,1]},
    {type:'Freight',category:'Carga',area:'Gran Capacidad',desc:'Este equipo es ideal en el campo de la logística, en las necesidades de fábricas, almacenes, centros comerciales, supermercados, estaciones y aeropuertos, asegurando la confiabilidad propia de Aoyama Elevator.',caurto:true,pasajeros:[13,26,40,66,85,106,160],carga:[1000,2000,3000,5000,6400,8000,12000],velo:[0.25,0.5,1,1.75]}
  ]

  return (
    <div className='flex gap-7 px-12'>
      <Sidebar/>
      <Card  data={data}/>
    </div>
  )
}

export default App
