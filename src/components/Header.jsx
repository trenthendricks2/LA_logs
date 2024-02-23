import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState, useId } from 'react'

export default function Header(props) {
  const {searchPlayer} = props;
  const id = useId();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    searchPlayer(input)
  }


  return (
    <div className='py-3 px-2 sticky top-0 bg-slate-1000 sticky'>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <form onSubmit={handleSubmit}>
          <input value={input} onInput={e => setInput(e.target.value)} type="search" id={id} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Player" />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Search</button>
        </form>
    </div>
    </div>
  )
}
