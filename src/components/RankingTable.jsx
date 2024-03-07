import React from 'react'
import berserkerIcon from '../utils/classes/102.png'
import destroyerIcon from '../utils/classes/103.png'
import gunlancerIcon from '../utils/classes/104.png'
import paladinIcon from '../utils/classes/105.png'
import slayerIcon from '../utils/classes/112.png'
import arcanistIcon from '../utils/classes/202.png'
import summonerIcon from '../utils/classes/203.png'
import bardIcon from '../utils/classes/204.png'
import sorceressIcon from '../utils/classes/205.png'
import wardancerIcon from '../utils/classes/302.png'
import scrapperIcon from '../utils/classes/303.png'
import soulfistIcon from '../utils/classes/304.png'
import glaivierIcon from '../utils/classes/305.png'
import strikerIcon from '../utils/classes/312.png'
import deathbladeIcon from '../utils/classes/402.png'
import shadowhunterIcon from '../utils/classes/403.png'
import reaperIcon from '../utils/classes/404.png'
import souleaterIcon from '../utils/classes/405.png'
import sharpshooterIcon from '../utils/classes/502.png'
import deadeyeIcon from '../utils/classes/503.png'
import artilleristIcon from '../utils/classes/504.png'
import machinistIcon from '../utils/classes/505.png'
import gunslingerIcon from '../utils/classes/512.png'
import artistIcon from '../utils/classes/602.png'
import aeromancerIcon from '../utils/classes/603.png'


const exampleData = {
    rank: {
        '1' : {
            name: 'Tony',
            DPS: '3 mil',
            iLvl: '1622',
            duration: '2:45',
            date: '3/6',
            subClass: 'Shadowhunter',
            percentile: 100
        },
        '2' : {
            name: 'Brony',
            DPS: '2.8 mil',
            iLvl: '1620',
            duration: '2:25',
            date: '3/8',
            subClass: 'Deathblade',
            percentile: 90
        },
        '3' : {
            name: 'billy',
            DPS: '2.6 mil',
            iLvl: '1621',
            duration: '2:35',
            date: '3/7',
            subClass: 'Sorceress',
            percentile: 80
        },
        '4' : {
            name: 'billy',
            DPS: '2.5 mil',
            iLvl: '1621',
            duration: '2:35',
            date: '3/7',
            subClass: 'Berserker',
            percentile: 70
        },
        '5' : {
            name: 'billy',
            DPS: '2.4 mil',
            iLvl: '1621',
            duration: '2:35',
            date: '3/7',
            subClass: 'Destroyer',
            percentile: 60
        },
        '6' : {
            name: 'billy',
            DPS: '2.3 mil',
            iLvl: '1621',
            duration: '2:35',
            date: '3/7',
            subClass: 'Gunlancer',
            percentile: 50
        },
        '7' : {
            name: 'billy',
            DPS: '2.2 mil',
            iLvl: '1621',
            duration: '2:35',
            date: '3/7',
            subClass: 'Paladin',
            percentile: 40
        },
        '8' : {
            name: 'billy',
            DPS: '2.1 mil',
            iLvl: '1621',
            duration: '2:35',
            date: '3/7',
            subClass: 'Slayer',
            percentile: 20
        },


    }
}

export default function RankingTable(props) {
    const {playersearch, searchPlayer} = props

    const percentileColor = (percentile, rankNum) => {
        if (percentile === 100) {return(<div className='text-amber-400'>{rankNum} </div>)}
        if (percentile < 100 && percentile >= 90) {return( <div className='text-pink-500'>{rankNum}</div>)}
        if (percentile < 90 && percentile >= 70) {return( <div className='text-purple-600'>{rankNum}</div>)}
        if (percentile < 70 && percentile >= 50) {return( <div className='text-blue-500'>{rankNum}</div>)}
        if (percentile < 50 && percentile >= 30) {return( <div className='text-green-500'>{rankNum}</div>)}
        if (percentile < 30 && percentile >= 0) {return( <div className='text-gray-500'>{rankNum}</div>)}
    }

    const classColor = (className, name) => {
        if (className === 'Berserker')   {return(<a className="text-[#ee2e48] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={berserkerIcon}/> {name} </a>)}
        if (className === 'Destroyer')   {return(<a className="text-[#7b9aa2] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={destroyerIcon}/> {name}</a>)}
        if (className === 'Gunlancer')   {return(<a className="text-[#e1907e] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={gunlancerIcon}/> {name} </a>)}
        if (className === 'Paladin')     {return(<a className="text-[#ff9900] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={paladinIcon}/>{name} </a>)}
        if (className === 'Slayer')      {return(<a className="text-[#db6a42] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={slayerIcon}/>{name} </a>)}
        if (className === 'Arcanist')    {return(<a className="text-[#b38195] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={arcanistIcon}/>{name} </a>)}
        if (className === 'Summoner')    {return(<a className="text-[#22aa99] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={summonerIcon}/>{name} </a>)}
        if (className === 'Bard')        {return(<a className="text-[#674598] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={bardIcon}/>{name} </a>)}
        if (className === 'Sorceress')   {return(<a className="text-[#66aa00] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={sorceressIcon}/>{name} </a>)}
        if (className === 'Wardancer')   {return(<a className="text-[#aaaa11] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={wardancerIcon}/>{name} </a>)}
        if (className === 'Scrapper')    {return(<a className="text-[#990099] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={scrapperIcon}/>{name} </a>)}
        if (className === 'Soulfist')    {return(<a className="text-[#316395] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={soulfistIcon}/>{name} </a>)}
        if (className === 'Glaivier')    {return(<a className="text-[#f6da6a] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={glaivierIcon}/>{name} </a>)}
        if (className === 'Striker')     {return(<a className="text-[#994499] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={strikerIcon}/>{name} </a>)}
        if (className === 'Deathblade')  {return(<a className="text-[#a91a16] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={deathbladeIcon}/>{name} </a>)}
        if (className === 'Shadowhunter'){return(<a className="text-[#0099c6] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={shadowhunterIcon}/>{name} </a>)}
        if (className === 'Reaper')      {return(<a className="text-[#109618] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={reaperIcon}/>{name} </a>)}
        if (className === 'Souleater')   {return(<a className="text-[#c16ed0] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={souleaterIcon}/>{name} </a>)}
        if (className === 'Sharpshooter'){return(<a className="text-[#dd4477] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={sharpshooterIcon}/>{name} </a>)}
        if (className === 'Deadeye')     {return(<a className="text-[#4442a8] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={deadeyeIcon}/>{name} </a>)}
        if (className === 'Artillerist') {return(<a className="text-[#33670b] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={artilleristIcon}/>{name} </a>)}
        if (className === 'Machinist')   {return(<a className="text-[#3b4292] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={machinistIcon}/>{name} </a>)}
        if (className === 'Gunslinger')  {return(<a className="text-[#6bcec2] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={gunslingerIcon}/>{name} </a>)}
        if (className === 'Artist')      {return(<a className="text-[#a34af0] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={artistIcon}/>{name} </a>)}
        if (className === 'Aeromancer')  {return(<a className="text-[#084ba3] flex" href='#' onClick={() => {searchPlayer(name)}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={aeromancerIcon}/>{name} </a>)}
        else {return(<a className="text-gray-400" href='#' onClick={() => {searchPlayer(name)}}> {name} </a>)}
    }

  return (
    <div className=''>
        <table className="bg-gray-800 text-gray-400 border border-gray-500">
            <thead>
                <tr className=''>
                    <th className='w-auto px-2 border border-gray-600'>Rank</th>
                    <th className='w-80 px-2 border border-gray-600'>Name</th>
                    <th className='w-24 px-2 border border-gray-600'>DPS</th>
                    <th className='w-auto px-2 border border-gray-600'>iLvl</th>
                    <th className='w-auto px-2 border border-gray-600'>Duration</th>
                    <th className='w-auto px-2 border border-gray-600'>Date</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(exampleData.rank).map((rankNum) => {
                    let player = exampleData.rank[rankNum]
                    return (
                        <tr key={rankNum}>
                            <td className='text-right pr-3 border border-gray-700'> { percentileColor((player.percentile), rankNum) } </td>
                            <td className='text-left pl-3 border border-gray-700 capitalize'> { classColor(player.subClass, player.name) } </td>
                            <td className='text-right px-3 border border-gray-700'>{player.DPS}</td>
                            <td className='text-right px-1 border border-gray-700'>{player.iLvl}</td>
                            <td className='text-right pr-3 border border-gray-700'>{player.duration}</td>
                            <td className='text-right pr-3 border border-gray-700'>{player.date}</td>
                        </tr>
                    )
                })} 
            </tbody>
        </table>
    </div>
  )
}
