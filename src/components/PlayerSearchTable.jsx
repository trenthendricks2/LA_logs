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
import { abbreviateNumber } from "js-abbreviation-number";

export default function PlayerSearchTable(props) {
    const {playerSearchObject, playerSearch} = props
    
    const percentileColor = (percentile) => {
        if (percentile === 100) {return(<div className='text-amber-400'>{percentile} </div>)}
        if (percentile < 100 && percentile >= 90) {return( <div className='text-pink-500'>{percentile}</div>)}
        if (percentile < 90 && percentile >= 70) {return( <div className='text-purple-600'>{percentile}</div>)}
        if (percentile < 70 && percentile >= 50) {return( <div className='text-blue-500'>{percentile}</div>)}
        if (percentile < 50 && percentile >= 30) {return( <div className='text-green-500'>{percentile}</div>)}
        if (percentile < 30 && percentile >= 0) {return( <div className='text-gray-500'>{percentile}</div>)}
    }

    const classColor = (className, dps) => {
        if (className === 'Berserker')   {return(<a className="text-[#ee2e48] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={berserkerIcon}/> {dps} </a>)}
        if (className === 'Destroyer')   {return(<a className="text-[#7b9aa2] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={destroyerIcon}/> {dps}</a>)}
        if (className === 'Gunlancer')   {return(<a className="text-[#e1907e] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={gunlancerIcon}/> {dps} </a>)}
        if (className === 'Paladin')     {return(<a className="text-[#ff9900] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={paladinIcon}/>{dps} </a>)}
        if (className === 'Slayer')      {return(<a className="text-[#db6a42] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={slayerIcon}/>{dps} </a>)}
        if (className === 'Arcanist')    {return(<a className="text-[#b38195] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={arcanistIcon}/>{dps} </a>)}
        if (className === 'Summoner')    {return(<a className="text-[#22aa99] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={summonerIcon}/>{dps} </a>)}
        if (className === 'Bard')        {return(<a className="text-[#674598] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={bardIcon}/>{dps} </a>)}
        if (className === 'Sorceress')   {return(<a className="text-[#66aa00] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={sorceressIcon}/>{dps} </a>)}
        if (className === 'Wardancer')   {return(<a className="text-[#aaaa11] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={wardancerIcon}/>{dps} </a>)}
        if (className === 'Scrapper')    {return(<a className="text-[#990099] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={scrapperIcon}/>{dps} </a>)}
        if (className === 'Soulfist')    {return(<a className="text-[#316395] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={soulfistIcon}/>{dps} </a>)}
        if (className === 'Glaivier')    {return(<a className="text-[#f6da6a] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={glaivierIcon}/>{dps} </a>)}
        if (className === 'Striker')     {return(<a className="text-[#994499] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={strikerIcon}/>{dps} </a>)}
        if (className === 'Deathblade')  {return(<a className="text-[#a91a16] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={deathbladeIcon}/>{dps} </a>)}
        if (className === 'Shadowhunter'){return(<a className="text-[#0099c6] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={shadowhunterIcon}/>{dps} </a>)}
        if (className === 'Reaper')      {return(<a className="text-[#109618] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={reaperIcon}/>{dps} </a>)}
        if (className === 'Souleater')   {return(<a className="text-[#c16ed0] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={souleaterIcon}/>{dps} </a>)}
        if (className === 'Sharpshooter'){return(<a className="text-[#dd4477] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={sharpshooterIcon}/>{dps} </a>)}
        if (className === 'Deadeye')     {return(<a className="text-[#4442a8] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={deadeyeIcon}/>{dps} </a>)}
        if (className === 'Artillerist') {return(<a className="text-[#33670b] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={artilleristIcon}/>{dps} </a>)}
        if (className === 'Machinist')   {return(<a className="text-[#3b4292] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={machinistIcon}/>{dps} </a>)}
        if (className === 'Gunslinger')  {return(<a className="text-[#6bcec2] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={gunslingerIcon}/>{dps} </a>)}
        if (className === 'Artist')      {return(<a className="text-[#a34af0] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={artistIcon}/>{dps} </a>)}
        if (className === 'Aeromancer')  {return(<a className="text-[#084ba3] pr-2 flex" href='#' onClick={() => {}}> <img className='object-scale-down h-4 pr-2 pt-[2px]' src={aeromancerIcon}/>{dps} </a>)}
        else {return(<a className="text-gray-400" href='#' onClick={() => {searchPlayer(name)}}> {name} </a>)}
    }

    const timeConvert = (time) => {
        const hrs = Math.floor(time / 3600)
        const mins = Math.floor((time % 3600) / 60)
        const secs = Math.floor(time % 60)

        let ret = "";

        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;

        return ret;
    }

  return (
    <div>
        <div className=''>
        <table className="bg-gray-800 text-gray-400 border border-gray-500">
            <thead>
                <tr className=''>
                    <th className='w-auto px-2 border border-gray-600'>Rank</th>
                    <th className='w-auto px-2 border border-gray-600'>Hist %</th>
                    <th className='w-24 px-2 border border-gray-600'>DPS</th>
                    <th className='w-auto px-2 border border-gray-600'>iLvl</th>
                    <th className='w-auto px-2 border border-gray-600'>Duration</th>
                    <th className='w-auto px-2 border border-gray-600'>Date</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(playerSearchObject).map((rankNum) => {
                    const psoRankNum = playerSearchObject[rankNum]
                    let dps = psoRankNum.Dps
                    let dpsNum = abbreviateNumber(dps, 2)

                    return (
                        <tr key={rankNum}>
                            <td className='text-right pr-1 pl-3 border border-gray-700 capitalize'> {rankNum} </td>
                            <td className='text-right pr-3 border border-gray-700'> { percentileColor((psoRankNum.percentile)) } </td>
                            <td className='text-right px-3 border border-gray-700'>{classColor(psoRankNum.subClass, dpsNum)}</td>
                            <td className='text-right px-1 border border-gray-700'>{psoRankNum.iLvl}</td>
                            <td className='text-right pr-3 border border-gray-700'>{timeConvert(psoRankNum.duration)}</td>
                            <td className='text-right pr-3 border border-gray-700'>{psoRankNum.date}</td>
                        </tr>
                    )
                })} 
            </tbody>
        </table>
    </div>
    
    </div>
  )
}
