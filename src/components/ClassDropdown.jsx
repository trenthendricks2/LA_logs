import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChartColumn, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useState, useId, } from 'react'
import { archetype } from '../utils/archetype-raid'

export default function Dropdown(props) {
    const {listener, dropShow, setDropShow, divId, dropName} = props
    const [classDropShow, setClassDropShow] = useState(false)
   


    const target = document.querySelector('#'+divId)
    const eventListen = (event) =>{
      const withinBoundaries = event.composedPath().includes(target)
  
        if (withinBoundaries) {
        } else {
          document.removeEventListener('click', eventListen)
          setDropShow(false)
        }
    }
    if(dropShow===true){
      document.addEventListener('click', eventListen) 
    }

    const showClassDropDown = (currentClass) => {
      if(currentClass === "Fighters") {
        setClassDropShow('Fighters')
      }

      if(currentClass === "Mages") {
        setClassDropShow('Mages')
      }

      if(currentClass === "Warriors") {
        setClassDropShow('Warriors')
      }

      if(currentClass === "Assassins") {
        setClassDropShow('Assassins')
      }

      if(currentClass === "Specialists") {
        setClassDropShow('Specialists')
      }

      if(currentClass === "Gunners") {
        setClassDropShow('Gunners')
      }
    }
    

  return (
    <div  className='inline-block text-left pl-5' >
          <div key={dropName + "1"} className=''>
            <button 
                    id={dropName}
                    onClick={()=>{setDropShow(!dropShow)}}
                    className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-sm font-semibold text-gray-400">
              {dropName}
              <FontAwesomeIcon icon={faAngleDown} className='relative left-1 top-1'/>
            </button>
          </div>
          <div className='flex'>
            { dropShow===true ? 
                <div className=" absolute mt-1 w-24 origin-top-right rounded-md bg-gray-800 shadow-lg text-gray-400" >
                  <div className='flex'>
                    <div className='inline-block text-left rounded-md'>
                    {Object.keys(archetype.classes).map( (type, typeIndex) => {
                        const currentClass = type
                        return (
                          <div  key={currentClass} 
                                className="" 
                                onClick={() => {showClassDropDown(currentClass)}}>
                            <button className='inline-flex w-full justify-left px-3 py-2 pr-5 hover:bg-gray-700 text-sm hover:rounded-md' id={currentClass}>{currentClass}<FontAwesomeIcon icon={faAngleRight} className='absolute right-1'/></button>
                          </div>

                        )
                      })} 
                      </div>
                      <div className='relative r-10 inline-block text-left px-4'>
                        { classDropShow==="Fighters" ? 
                              <div className=" w-28 py-1 rounded-md bg-gray-800 shadow-lg text-gray-400 hover:bg-gray-700 px-2">
                                Fighters
                              </div>:
                          classDropShow==="Mages" ? 
                              <div className=" w-28 py-1 rounded-md bg-gray-800 shadow-lg text-gray-400 hover:bg-gray-700 px-2">
                                Mages
                              </div>:
                          classDropShow==="Assassins" ? 
                            <div className=" w-28 py-1 rounded-md bg-gray-800 shadow-lg text-gray-400 hover:bg-gray-700 px-2">
                              Assassins
                            </div>:
                          classDropShow==="Warriors" ? 
                            <div className=" w-28 py-1 rounded-md bg-gray-800 shadow-lg text-gray-400 hover:bg-gray-700 px-2">
                              Warriors
                            </div>:
                          classDropShow==="Gunners" ? 
                            <div className=" w-28 py-1  rounded-md bg-gray-800 shadow-lg text-gray-400 hover:bg-gray-700 px-2">
                              Gunners
                            </div>:
                          classDropShow==="Specialists" ? 
                            <div className=" w-28 py-1 rounded-md bg-gray-800 shadow-lg text-gray-400 hover:bg-gray-700 px-2">
                              Specialists
                            </div>:
                          "" }
                      </div>
                  </div>
                </div> 
              : ""
            }
            

          </div>
        </div>
  )
}

