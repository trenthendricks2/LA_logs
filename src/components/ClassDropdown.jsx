import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChartColumn, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useState, useId, } from 'react'
import { archetype } from '../utils/archetype'

export default function Dropdown(props) {
    const {listener, dropShow, setDropShow} = props

    

  return (
    <div className='relative inline-block text-left pl-5'
             onMouseLeave={()=>{ 
              if(dropShow===true) {
                document.addEventListener("click", listener)}}
              }
        >
          <div className=''>
            <button type="button"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={()=>{setDropShow(!dropShow)}}
                    className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-sm font-semibold text-gray-400">
              Classes
              <FontAwesomeIcon icon={faAngleDown} className='relative left-1 top-1'/>
            </button>
          </div>
          { dropShow===true ? 
              <div className=" absolute z-10 mt-2 w-40 origin-top-right divide-y rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-400" 
                   role="menu" 
                   aria-orientation="vertical" 
                   aria-labelledby="menu-button" 
                   tabindex="-1">
                <div className="py-1" role="none">
                  <div className='' role='munuitem' id="class-item-1">
                    <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem"  id="class-item-1">Warrior <FontAwesomeIcon icon={faAngleRight} className='absolute right-3' /></a>
                      
                  </div>
                  <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem"  id="class-item-2">Mages <FontAwesomeIcon icon={faAngleRight} className='absolute right-3' /></a>
                  <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem"  id="class-item-3">Fighters <FontAwesomeIcon icon={faAngleRight} className='absolute right-3' /></a>
                  <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem"  id="class-item-4">Gunners <FontAwesomeIcon icon={faAngleRight} className='absolute right-3' /></a>
                  <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem"  id="class-item-5">Assassins <FontAwesomeIcon icon={faAngleRight} className='absolute right-3' /></a>
                  <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem"  id="class-item-6">Specialists <FontAwesomeIcon icon={faAngleRight} className='absolute right-3' /></a>
                </div>
                
              </div> 
            : ""
          }
        </div>
  )
}
