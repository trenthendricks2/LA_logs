import React from 'react'
import RankingTable from './RankingTable';

export default function Body(props) {
  const {playerSearch, searchPlayer, playerSearchObject } = props;

  return (
    <div className=''>
      <RankingTable playerSearch={playerSearch} searchPlayer={searchPlayer} playerSearchObject={playerSearchObject}/>
    </div>
  )
}
