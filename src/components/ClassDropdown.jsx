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
        console.log("fighters")
      }
    }
    

  return (
    <div  className='relative inline-block text-left pl-5' >
          <div className=''>
            <button 
                    id={dropName}
                    onClick={()=>{setDropShow(!dropShow)}}
                    className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-sm font-semibold text-gray-400">
              {dropName}
              <FontAwesomeIcon icon={faAngleDown} className='relative left-1 top-1'/>
            </button>
          </div>
          <div>
            { dropShow===true ? 
                <div className=" absolute z-10 mt-2 w-40 origin-top-right divide-y rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-400" >
                  <div className="py-1">
                  
                      {Object.keys(archetype).map( (type, typeIndex) => {
                        const currentClass = type
                        console.log(currentClass)
                        return (
                          <div  key={type} className=" block px-4 py-2 text-sm hover:bg-gray-700">
                            <button id={currentClass}>{type} <FontAwesomeIcon icon={faAngleRight} className='absolute right-3' onClick={() => {
                              
                            }} /></button>
                          </div>

                          
                          /*{ <div key={type}>
                            <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem">{type} <FontAwesomeIcon icon={faAngleRight} className='absolute right-3' /></a>
                          
                            {Object.keys(archetype.Fighters).map( (className, classNameIndex) => {
                              return(
                                <div className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" key={className + classNameIndex}>
                                  {className}
                                </div>
                              )
                            })}
                          </div>}*/
                        )
                      })}  
                    
                  </div>
                  
                </div> 
              : ""
            }
          </div>
        </div>
  )
}
