import React from 'react'
import RankingTable from './RankingTable';

export default function Body(props) {
  const {playersearch} = props;

  return (
    <div className='center'>
      <RankingTable/>
    </div>
  )
}
