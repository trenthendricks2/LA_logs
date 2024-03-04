import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChartColumn, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useState, useId, } from 'react'
import { archetype } from '../utils/archetype-raid'

export default function Dropdown(props) {
    const { dropShow, setDropShow, divId, dropName} = props
    const [SClassDropShow, setSClassDropShow] = useState(false)
   


    const target = document.querySelector('#'+divId)
    const eventListen = (event) =>{
      const withinBoundaries = event.composedPath().includes(target)
  
        if (withinBoundaries) {
        } else {
          document.removeEventListener('click', eventListen)
          setDropShow(false)
          setSClassDropShow(false)
        }
    }
    if(dropShow===true){
      document.addEventListener('click', eventListen) 
    }

    const SubClassDropShow = (c) => {
      if(c==="Fighters") {
        setSClassDropShow(c)
      }
      if(c==="Mages") {
        setSClassDropShow(c)
      }
      if(c==="Warriors") {
        setSClassDropShow(c)
      }
      if(c==="Specialists") {
        setSClassDropShow(c)
      }
      if(c==="Assassins") {
        setSClassDropShow(c)
      }
      if(c==="Gunners") {
        setSClassDropShow(c)
      }
    }
    

    const ArchetypeDropDown = ({name}) => {
      const subClasses = archetype.classes[name]
      return(
        <div key={name}>
          <div key={name} 
               className="" 
               onClick={() => {
                if(SClassDropShow !== name) {
                SubClassDropShow(name)
                } else {
                  setSClassDropShow('false')
                }

               }}>
            <button className='inline-flex w-full justify-left px-3 py-2 pr-5 hover:bg-gray-700 text-sm hover:rounded-md' id={name + 'classDrop'}>{name}<FontAwesomeIcon icon={faAngleRight} className='absolute right-1'/></button>
          </div>
        </div>
      )
    }

    const SubClassDropDown = ({subClassName}) => {
      return(
        <div key={subClassName} className=''>
          {Object.keys(archetype.classes[subClassName]).map((name) => {
            return (
              <div className='mt-1 rounded-md bg-gray-800 '>
                <div key={name} >
                  <button id={name+' subClassDrop'} className='inline-flex w-full justify-left px-3 py-2 pr-5 hover:bg-gray-700 text-sm rounded-md text-gray-400 bg-gray-800 border-x border-sky-400'>
                    {name}
                  </button>
                </div>  
              </div>
              
            )
          })}
        </div>
      )
    }
    

  return (
    <div  className='inline-block text-left pl-5' >
          <div key={dropName + "1"} className=''>
            <button 
                    id={dropName}
                    onClick={()=>{
                      setDropShow(!dropShow)
                      if (SClassDropShow !== false) {
                        setSClassDropShow(false)
                      }
                    }}
                    className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-sm font-semibold text-gray-400">
              {dropName}
              <FontAwesomeIcon icon={faAngleDown} className='relative left-1 top-1'/>
            </button>
          </div>
          <div className='absolute space-x-[100px] '>
            { dropShow===true ? 
                <div className=" absolute mt-1 w-24 origin-top-right rounded-md bg-gray-800 shadow-lg text-gray-400" >
                  
                    {Object.keys(archetype.classes).map((name) =>{
                      return (
                        <div key={name}>
                          <ArchetypeDropDown name={name}/>
                        </div>
                      )
                    })}
                </div> 
              : ""
            }
            { SClassDropShow === 'Fighters' ? 
              <div key="fighters" className='mt-[114px]'> 
                <SubClassDropDown subClassName="Fighters"/>
              </div>
              :
              SClassDropShow === 'Mages' ? 
              <div key="mages" className='mt-[77px] '> 
                <SubClassDropDown subClassName="Mages"/>
              </div>
              :
              SClassDropShow === 'Warriors' ? 
              <div key="warriors" className=''> 
                <SubClassDropDown subClassName="Warriors"/>
              </div>
              :
              SClassDropShow === 'Assassins' ? 
              <div key="assasins" className='mt-[42px]'>  
                <SubClassDropDown subClassName="Assassins"/>
              </div>
              :
              SClassDropShow === 'Gunners' ? 
              <div key="gunners" className='mt-[152px]'> 
                <SubClassDropDown subClassName="Gunners"/>
              </div>
              :
              SClassDropShow === 'Specialists' ? 
              <div key="specialists"className='mt-[184px]'> 
                <SubClassDropDown subClassName="Specialists"/>
              </div>
              : ""  
        }
          </div>
        </div>
  )
}

