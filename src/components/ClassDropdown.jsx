import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChartColumn, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useState, useId, } from 'react'
import { archetype } from '../utils/archetype'

export default function Dropdown(props) {
    const {listener, dropShow, setDropShow, divId} = props

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
    

  return (
    <div  className='relative inline-block text-left pl-5' >
          <div className=''>
            <button type="button"
                    onClick={()=>{setDropShow(!dropShow)}}
                    className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-sm font-semibold text-gray-400">
              Classes
              <FontAwesomeIcon icon={faAngleDown} className='relative left-1 top-1'/>
            </button>
          </div>
          { dropShow===true ? 
              <div className=" absolute z-10 mt-2 w-40 origin-top-right divide-y rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-400" >
                <div className="py-1">
                 
                    {Object.keys(archetype).map( (type, typeIndex) => {
                      return (
                        <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" key={type} >{type} <FontAwesomeIcon icon={faAngleRight} className='absolute right-3' /></a>
                      )
                    })}  
                  
                </div>
                
              </div> 
            : ""
          }
        </div>
  )
}
