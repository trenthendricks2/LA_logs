import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { useState, } from 'react'
import { raids } from '../utils/archetype-raid' /* Raid.Ivory_Tower.Gate_1.Logs */


export default function RaidDropDown(props) {
    const { dropShow, setDropShow, dropName, divId } = props
    const [ gateDropShow, setGateDropShow ] = useState(false)
    
    /* Event Listener to close dropdown when clicking off element */
        const target = document.querySelector('#'+divId)
        const eventListen = (event) =>{
            const withinBoundaries = event.composedPath().includes(target)
        
            if (withinBoundaries) {
            } else {
                document.removeEventListener('click', eventListen)
                setDropShow(false)
                setGateDropShow(false)
            }
        }
        if(dropShow===true){
            document.addEventListener('click', eventListen) 
          }

    const fightDropShow = (c) => {
        setGateDropShow(c)
    }

    const RaidDropDown = ({name}) => {
        return(
        
          <div key={name} className='relative '>
              <div key={name} 
                className='w-28 '
                onClick={() => {
                  if(gateDropShow !== name) {
                      fightDropShow(name)
                  } else {
                      setGateDropShow('false')
                  }
                }}>
                  <button 
                    className='inline-flex w-28 px-2 py-3 pr-1 hover:bg-gray-700 text-sm hover:rounded-md' 
                    id={name + 'raidDrop'}>
                      {name.replaceAll("_", " ")} <FontAwesomeIcon icon={faAngleRight} className='absolute right-1'/>
                  </button>
              </div>
              <GateDropDown raidName={name} className=''/>
          </div>
        )
      }
    
    const GateDropDown = ({raidName}) => {
      
        return(
            <div className=''>
              {
                gateDropShow === raidName ? 
                  <div key={raidName} >
                      { 
                          Object.keys(raids[raidName]).map((name) => {
                              return (
                              <div className='mb-1 rounded-md bg-gray-800' key={name}>
                                <div key={name} >
                                  <button id={name +' subClassDrop'} className='inline-flex w-full justify-center px-3 py-3 hover:bg-gray-700 text-sm rounded-md text-gray-400 bg-gray-800 border-x border-sky-400'>
                                      <a href={raids[raidName][name].Logs} target="_blank">{name.replaceAll("_", " ")}</a>
                                  </button>
                                </div>  
                              </div>
                              
                              )
                          })
                        }
                    
                      
                  </div>  : ""}
            </div>
            
        )
    }


  return (
    <div  className='relative inline-block text-left pl-5' >
        {/* Raids Drop Down */}
        <div key={dropName + "1"} className=''>
            <button 
                    id={dropName}
                    onClick={()=>{
                      setDropShow(!dropShow)
                      if (gateDropShow !== false) {
                        setGateDropShow(false)
                      }
                    }}
                    className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-sm font-semibold text-gray-400">
              {dropName}
              <FontAwesomeIcon icon={faAngleDown} className='relative left-1 top-1'/>
            </button>
          </div>
          <div className='absolute  '>
          { dropShow===true ? 
                <div className=" absolute mt-1 w-28 origin-top-right rounded-md bg-gray-800 shadow-lg text-gray-400" >
                    {Object.keys(raids).map((name) =>{
                      return (
                        <div key={name}>
                          <RaidDropDown name={name}/>
                        </div>
                      )
                    })}
                </div> 
              : ""
            }
          </div>
    </div>
  )
}

