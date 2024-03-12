import React from 'react'
import RankingTable from './RankingTable';
import PlayerSearchTable from './PlayerSearchTable';

export default function Body(props) {
  const {playerSearch, searchPlayer, playerSearchObject } = props;

  return (
    <div className=''>
      <RankingTable playerSearch={playerSearch} searchPlayer={searchPlayer} playerSearchObject={playerSearchObject}/>
      {playerSearchObject ? <PlayerSearchTable playerSearchObject={playerSearchObject} playerSearch={playerSearch}/>:""}
    </div>
  )
}
