import React from 'react'
import RankingTable from './RankingTable';

export default function Body(props) {
  const {playersearch, searchPlayer} = props;

  return (
    <div className=''>
      <RankingTable playersearch={playersearch} searchPlayer={searchPlayer}/>
      {playersearch}
    </div>
  )
}
