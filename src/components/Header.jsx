import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChartColumn } from '@fortawesome/free-solid-svg-icons'
import { useState, useId } from 'react'

export default function Header(props) {
  const {searchPlayer} = props;
  const id = useId();
  const [input, setInput] = useState("");
  const [raidDropShow, setRaidDropShow] = useState(false)

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const submitSearchPlayer = (e) => {
    e.preventDefault()
    searchPlayer(input)
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
      <div className='flex'>
        <div className='relative inline-block text-left'>
          <div className=''>
            <button type="button"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={()=>{setRaidDropShow(!raidDropShow)}}
                    class="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-sm font-semibold text-gray-400">
              Raids
              <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          { raidDropShow===true ? 
              <div class=" absolute z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-gray-800 text-gray-400" 
                   role="menu" 
                   aria-orientation="vertical" 
                   aria-labelledby="menu-button" 
                   tabindex="-1">
                <div class="py-1" role="none">
                  <a href="#" class=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Ivory Tower</a>
                </div>
                <div class="py-1" role="none">
                  <a href="#" class=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">Akkan</a>
                  <a href="#" class=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabindex="-1" id="menu-item-3">Kayangel</a>
                </div>
                <div class="py-1" role="none">
                  <a href="#" class=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabindex="-1" id="menu-item-4">Brelshaza</a>
                  <a href="#" class=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabindex="-1" id="menu-item-5">Clown</a>
                </div>
                <div class="py-1" role="none">
                  <a href="#" class=" block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem" tabindex="-1" id="menu-item-6">Old Conent</a>
                </div>
              </div> 
            : ""
          }
        </div>
      </div>  
    
    
    </div>
  )
}
