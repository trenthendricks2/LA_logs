import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChartColumn } from '@fortawesome/free-solid-svg-icons'
import { useState, useId } from 'react'

export default function Header(props) {
  const {searchPlayer} = props;
  const id = useId();
  const [input, setInput] = useState("");

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
      
    </div>
  )
}
