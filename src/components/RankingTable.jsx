import React from 'react'

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
            subClass: 'Sorc',
            percentile: 80
        },
        '4' : {
            name: 'billy',
            DPS: '2.5 mil',
            iLvl: '1621',
            duration: '2:35',
            date: '3/7',
            subClass: 'Sorc',
            percentile: 70
        },
        '5' : {
            name: 'billy',
            DPS: '2.4 mil',
            iLvl: '1621',
            duration: '2:35',
            date: '3/7',
            subClass: 'Sorc',
            percentile: 60
        },
        '6' : {
            name: 'billy',
            DPS: '2.3 mil',
            iLvl: '1621',
            duration: '2:35',
            date: '3/7',
            subClass: 'Sorc',
            percentile: 50
        },
        '7' : {
            name: 'billy',
            DPS: '2.2 mil',
            iLvl: '1621',
            duration: '2:35',
            date: '3/7',
            subClass: 'Sorc',
            percentile: 40
        },
        '8' : {
            name: 'billy',
            DPS: '2.1 mil',
            iLvl: '1621',
            duration: '2:35',
            date: '3/7',
            subClass: 'Sorc',
            percentile: 20
        },


    }
}

export default function RankingTable(props) {
    const {playersearch, searchPlayer} = props

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
                    return (
                        <tr key={rankNum}>
                            <td className='text-right pr-3 border border-gray-700'>
                                {
                                    exampleData.rank[rankNum].percentile >= 100 ? <div className='text-amber-400'>{rankNum} </div> : 
                                    exampleData.rank[rankNum].percentile >= 90 && exampleData.rank[rankNum].percentile < 100  ? <div className='text-pink-500'>{rankNum}</div> : 
                                    exampleData.rank[rankNum].percentile >= 70 && exampleData.rank[rankNum].percentile < 90  ? <div className='text-purple-600'>{rankNum}</div> :
                                    exampleData.rank[rankNum].percentile >= 50 && exampleData.rank[rankNum].percentile < 70  ? <div className='text-blue-500'>{rankNum}</div> :
                                    exampleData.rank[rankNum].percentile >= 30 && exampleData.rank[rankNum].percentile < 50  ? <div className='text-green-500'>{rankNum}</div> :
                                    exampleData.rank[rankNum].percentile >= 0 && exampleData.rank[rankNum].percentile < 30  ? <div className='text-gray-500'>{rankNum}</div> :
                                    ""
                                }
                            
                            </td>
                            <td className='text-left pl-3 border border-gray-700 capitalize'>
                                <a href='#' onClick={(e) => {searchPlayer(exampleData.rank[rankNum].name)}}> {exampleData.rank[rankNum].name} </a>
                            </td>
                            <td className='text-right px-3 border border-gray-700'>{exampleData.rank[rankNum].DPS}</td>
                            <td className='text-right px-1 border border-gray-700'>{exampleData.rank[rankNum].iLvl}</td>
                            <td className='text-right pr-3 border border-gray-700'>{exampleData.rank[rankNum].duration}</td>
                            <td className='text-right pr-3 border border-gray-700'>{exampleData.rank[rankNum].date}</td>
                        </tr>
                    )
                })}
                
                <tr>

                </tr>
                <tr>

                </tr>
            </tbody>
        </table>
    </div>
  )
}
