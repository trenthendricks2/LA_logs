import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChartColumn, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useState, useId, } from 'react'
import ClassDropdown from './ClassDropdown'


export default function Header(props) {
  const {searchPlayer} = props;
  const id = useId();
  const [input, setInput] = useState("");
  const [raidDropShow, setRaidDropShow] = useState(false)
  const [classDropShow, setClassDropShow] = useState(false)
  const [raidGuideDropShow, setRaidGuideDropShow] = useState(false)
  const [classGuideDropShow, setClassGuideDropShow] = useState(false)
  

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const submitSearchPlayer = (e) => {
    e.preventDefault()
    searchPlayer(input)
  }

  
  const raidListener = () => {
    setRaidDropShow(raidDropShow===false)
    document.removeEventListener("click", raidListener)
  }

  
  const raidGuideListener = () => {
    setRaidGuideDropShow(raidGuideDropShow==false)
    document.removeEventListener("click", raidGuideListener)
  }
 

  return (
    <div className='py-3 px-2 sticky top-0 bg-slate-900 sticky'>
      
      {/* Search Bar */}
        <div className="flex">
          <FontAwesomeIcon icon={faChartColumn} className='text-5xl py-2 flex-none pr-4' /> {/* replace with Site Icon at some point */}
          <form onSubmit={submitSearchPlayer} className='max-w-md flex-auto py-4'>
            <div className='relative'>
              <input  value={input} 
                      onInput={handleInput}
                      placeholder="Search for Player"  
                      type="search" 
                      id={id} 
                      className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                />
              <button type="submit"  
                      className="text-white absolute end-2 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </form>
          <div className='py-5 pl-4 '>xta Buttons</div>
          <div className='py-5 pl-2 gap-2 '>xta Buttons</div>
          <div className='py-5 pl-2 gap-2 '>xta Buttons</div>
        </div>
          
      {/* Drop down menus */}
        <div className='flex' >

          {/* Raid dropdown */}
            <div className='relative inline-block text-left'
                  onMouseLeave={()=>{ 
                    if(raidDropShow===true) {
                      document.addEventListener("click", raidListener)}}
                    }
              >
                <div className=''>
                  <button type="button"
                          id="menu-button"
                          aria-expanded="true"
                          aria-haspopup="true"
                          onClick={()=>{setRaidDropShow(!raidDropShow)}}
                          className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-sm font-semibold text-gray-400">
                    Raids
                    <FontAwesomeIcon icon={faAngleDown} className='relative left-1 top-1'/>
                  </button>
                </div>
                { raidDropShow===true ? 
                    <div className=" absolute z-10 mt-2 w-40 origin-top-right divide-y divide-gray-500 rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-400" 
                        role="menu" 
                        aria-orientation="vertical" 
                        aria-labelledby="menu-button" 
                        tabIndex="-1">
                      <div className="py-1" role="none">
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Ivory Tower </a> 
                      </div>
                      <div className="py-1" role="none">
                        <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabIndex="-1" id="menu-item-2">Akkan </a>
                        <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabIndex="-1" id="menu-item-3">Kayangel </a>
                      </div>
                      <div className="py-1" role="none">
                        <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabIndex="-1" id="menu-item-4">Brelshaza </a>
                        <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabIndex="-1" id="menu-item-5">Clown </a>
                      </div>
                      <div className="py-1" role="none">
                        <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabIndex="-1" id="menu-item-6">Old Conent </a>
                      </div>
                    </div> 
                  : ""
                }
            </div>

          {/* Classes Dropdown */}
          <div id="classes">
            <ClassDropdown 
                dropShow={classDropShow}
                setDropShow={setClassDropShow}
                dropName="Classes"
                divId="classes"
            />
          </div>
          

          {/* Raidguide dropdown */}
            <div className='relative inline-block text-left pl-5'
                onMouseLeave={()=>{ 
                  if(raidGuideDropShow===true) {
                    document.addEventListener("click", raidGuideListener)}}
                  }
            >
              <div className=''>
                <button type="button"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={()=>{setRaidGuideDropShow(!raidGuideDropShow)}}
                        className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-sm font-semibold text-gray-400">
                  Raid Guides
                  <FontAwesomeIcon icon={faAngleDown} className='relative left-1 top-1'/>
                </button>
              </div>
              { raidGuideDropShow===true ? 
                <div className=" absolute z-10 mt-2 w-40 origin-top-right divide-y divide-gray-500 rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-400" 
                  role="menu" 
                  aria-orientation="vertical" 
                  aria-labelledby="menu-button" 
                  tabIndex="-1">
                  <div className="py-1" role="none">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Ivory Tower </a> 
                  </div>
                  <div className="py-1" role="none">
                    <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabIndex="-1" id="menu-item-2">Akkan </a>
                    <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabIndex="-1" id="menu-item-3">Kayangel </a>
                  </div>
                  <div className="py-1" role="none">
                    <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabIndex="-1" id="menu-item-4">Brelshaza </a>
                    <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabIndex="-1" id="menu-item-5">Clown </a>
                  </div>
                  <div className="py-1" role="none">
                    <a href="#" className=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabIndex="-1" id="menu-item-6">Old Conent </a>
                  </div>
                </div> 
                : ""
              }
            </div>

          {/* class guide dropdown */}
            <div id="classGuide">
              <ClassDropdown 
                dropShow={classGuideDropShow}
                setDropShow={setClassGuideDropShow}
                dropName='Class Guides'
                divId="classGuide"
              />
            </div>
      </div>
    </div>
  )
}
